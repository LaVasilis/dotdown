import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // if you want i18n
import {useEffect} from "react";
import {sanity} from "./sanityClient";


const QUERY = `*[_type == "newsArticle"] | order(publishedAt desc) {
  _id,
  title,
  category,
  publishedAt,
  excerpt,
  "id": slug.current,
  "imageUrl": mainImage.asset->url
}`;


const PAGE_SIZE = 6;

const filterKeys = [
  { key: "all", labelKey: "all" },
  { key: "upcoming", labelKey: "upcoming" },
  { key: "releases", labelKey: "releases" },
  { key: "general", labelKey: "general" },
];

function NewsPage() {
  const [newsItems, setNewsItems] = useState([]);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const filters = filterKeys.map((f) => ({ ...f, label: t(`news.filters.${f.labelKey}`) }));

  useEffect(() => {
  sanity.fetch(QUERY).then(setNewsItems).catch(console.error);
  }, []);

  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    if (activeFilter === "all") return newsItems;
return newsItems.filter((item) => item.category === activeFilter);
  }, [activeFilter, newsItems]);


  const pageCount = Math.ceil(filteredNews.length / PAGE_SIZE);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredNews.slice(start, start + PAGE_SIZE);
  }, [filteredNews, currentPage]);

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setCurrentPage(1); // reset to first page on filter change
  };

  const handleCardClick = (id) => {
    navigate(`/news/${id}`);
  };

  const handlePrevPage = () => {
    setCurrentPage((p) => Math.max(1, p - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((p) => Math.min(pageCount, p + 1));
  };

  return (
    
    
    <main className="news-page">
      
      {/* FILTER BAR */}
      <section className="news-filters">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${
              activeFilter === f.key ? "active" : ""
            }`}
            onClick={() => handleFilterChange(f.key)}
          >
            {f.label}
          </button>
        ))}
      </section>

      {/* NEWS GRID */}
      <section className="news-grid">
        {currentItems.map((item) => (
          <article
            key={item.id}
            className="news-card"
            onClick={() => handleCardClick(item.id)}
          >
            {item.imageUrl && (
              <div className="news-card-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
            )}
            <div className="news-card-body">
              <p className="news-card-meta">
                <span className="news-card-category">
                  {filters.find((f) => f.key === item.category)?.label}
                </span>
                <span className="news-card-date">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </span>
              </p>
              <h3 className="news-card-title">{item.title?.[currentLang] ?? item.title?.en ?? item.title?.el}</h3>
              <p className="news-card-excerpt">{item.excerpt?.[currentLang] ?? item.excerpt?.en ?? item.excerpt?.el}</p>
              <span className="news-card-link">{t("news.readMore")}</span>
            </div>
          </article>
        ))}

        {currentItems.length === 0 && (
          <p className="news-empty">{t("news.empty")}</p>
        )}
      </section>

      {/* PAGINATION */}
      {pageCount > 1 && (
        <section className="news-pagination">
          <button
            className="page-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            {t("news.prev")}
          </button>

          {Array.from({ length: pageCount }).map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                className={`page-btn page-number ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}

          <button
            className="page-btn"
            onClick={handleNextPage}
            disabled={currentPage === pageCount}
          >
            {t("news.next")}
          </button>
        </section>
      )}
    </main>
  );
}

export default NewsPage;