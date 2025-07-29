import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ArticleDetail.css";

export default function ArticleDetail() {
  const { board, id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`/api/boards/${board}/articles/${id}`);
        if (!res.ok) {
          throw new Error("게시글을 불러오지 못했습니다.");
        }
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [board, id]);

  if (loading) return <div className="article-detail">로딩 중…</div>;
  if (error)   return <div className="article-detail error">{error}</div>;

  return (
    <div className="article-detail">
      <div className="detail-header">
        <h1 className="detail-title">{article.title}</h1>
        <div className="detail-meta">
          <span>번호: {article.id}</span>
          <span>작성자: {article.author}</span>
          <span>조회: {article.views}</span>
          <span>댓글: {article.commentCount}</span>
          <span>카테고리: {article.category}</span>
        </div>
      </div>

      <div className="detail-content">
        {/* HTML 형식이 아니라면 {article.content} */}
        <div
          className="content-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <div className="detail-actions">
        <button
          className="btn outline"
          onClick={() => navigate(-1)}
        >
          목록으로
        </button>
        <button
          className="btn primary"
          onClick={() => navigate(`/board/${board}/${id}/edit`)}
        >
          수정
        </button>
      </div>
    </div>
  );
}
