import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import { sanity } from "./sanityClient"; // adjust path if needed

const DETAIL_QUERY = `*[_type == "newsArticle" && slug.current == $slug][0]{
  _id,
  title,
  category,
  publishedAt,
  excerpt,
  body,
  "id": slug.current,
  "imageUrl": mainImage.asset->url
}`;

function NewsDetail() {
  const { id } = useParams(); // this is actually the slug
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let alive = true;

    sanity
      .fetch(DETAIL_QUERY, { slug: id })
      .then((data) => {
        if (!alive) return;
        setItem(data);
      })
      .catch((e) => {
        if (!alive) return;
        setErr(e);
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="news-detail">
        <button className="back-btn" onClick={() => navigate("/news")}>
          ← Back to news
        </button>
        <p>Loading…</p>
      </main>
    );
  }

  if (err) {
    return (
      <main className="news-detail">
        <button className="back-btn" onClick={() => navigate("/news")}>
          ← Back to news
        </button>
        <p>Failed to load: {String(err.message || err)}</p>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="news-detail">
        <button className="back-btn" onClick={() => navigate("/news")}>
          ← Back to news
        </button>
        <p>News item not found.</p>
      </main>
    );
  }

  return (
    <main className="news-detail">
      <button className="back-btn" onClick={() => navigate("/news")}>
        ← Back to news
      </button>

      <h1>{item.title?.[currentLang] ?? item.title?.en ?? item.title?.el}</h1>

      <p className="news-detail-meta">
        {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : ""}
      </p>

      {item.imageUrl && (
        <div className="news-detail-image">
          <img src={item.imageUrl} alt={item.title?.[currentLang] ?? item.title?.en ?? item.title?.el} />
        </div>
      )}

      <div className="news-detail-body">
        {item.body?.[currentLang] && <PortableText value={item.body[currentLang]} />}
        {!item.body?.[currentLang] && item.body?.en && <PortableText value={item.body.en} />}
        {!item.body?.[currentLang] && !item.body?.en && item.body?.el && <PortableText value={item.body.el} />}
      </div>
    </main>
  );
}

export default NewsDetail;
