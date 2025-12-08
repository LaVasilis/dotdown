import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // if you want i18n

// Dummy data – later you can fetch this from an API / CMS
const NEWS_ITEMS = [
  {
    id: "1",
    title: "BarroPasso Live in Berlin",
    category: "upcoming",
    date: "2025-01-20",
    excerpt: "We are burning Berlin next week. Get your tickets now!",
    imageUrl: "src/assets/dotlive.jpg",
  },
  {
    id: "2",
    title: "New EP from Sapiens X Diky",
    category: "releases",
    date: "2025-01-05",
    excerpt: "A fresh 4-track EP from the upcoming artists.",
    imageUrl: "src/assets/avunity.jpg",
  },
  {
    id: "3",
    title: "DotDown partners with  OffTheHook",
    category: "general",
    date: "2024-12-14",
    excerpt: "We’re teaming up with OffTheHook Festival.",
    imageUrl: "src/assets/untoff.jpg",
  },
];

const PAGE_SIZE = 6;

const filters = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming Lives" },
  { key: "releases", label: "Artist Releases" },
  { key: "general", label: "General News" },
];

function NewsPage() {
  const navigate = useNavigate();
  // const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    if (activeFilter === "all") return NEWS_ITEMS;
    return NEWS_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

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
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </p>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-excerpt">{item.excerpt}</p>
              <span className="news-card-link">Read more →</span>
            </div>
          </article>
        ))}

        {currentItems.length === 0 && (
          <p className="news-empty">No news for this filter (yet).</p>
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
            ‹ Prev
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
            Next ›
          </button>
        </section>
      )}
    </main>
  );
}

export default NewsPage;