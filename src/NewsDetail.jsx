import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NEWS_ITEMS } from "./NewsPageData";

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = NEWS_ITEMS.find((n) => n.id === id);

  if (!item) {
    return (
      <main className="news-detail">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
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
      <h1>{item.title}</h1>
      <p className="news-detail-meta">
        {new Date(item.date).toLocaleDateString()}
      </p>
      {item.imageUrl && (
        <div className="news-detail-image">
          <img src={item.imageUrl} alt={item.title} />
        </div>
      )}
      <div className="news-detail-body">
        <p>
          Full article content for <strong>{item.title}</strong> goes here…
        </p>
      </div>
    </main>
  );
}

export default NewsDetail;