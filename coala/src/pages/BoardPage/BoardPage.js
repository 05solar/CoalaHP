import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BoardPage.css';

export default function BoardPage() {
  const { board } = useParams(); // 'notice' | 'qna' | 'free'
  const navigate = useNavigate();

  // 페이징
  const [page, setPage] = useState(1);
  const totalPages = 5; 

  // 글 목록
  const [articles, setArticles] = useState([]);
  // 체크박스 선택된 글의 id 들
  const [selectedIds, setSelectedIds] = useState([]);

  // 사용자 상태 
  const [user, setUser] = useState({
    loggedIn: false,
    role: 'user' // 'admin' 혹은 'user'
  });

  useEffect(() => {
    // TODO: 실제 로그인 여부/role 체크
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ loggedIn: true, role: localStorage.getItem('role') || 'user' });
    }
    fetchArticles();
  }, [board, page]);

  function fetchArticles() {
    // TODO: /api/boards/{board}?page={page} 호출
    // mock data
    const mock = Array.from({ length: 20 }).map((_, i) => ({
      id: (page-1)*10 + i + 1,
      category: board === 'notice' ? '공지' : board === 'qna' ? '질문' : '자유',
      title: `${board} sample title ${i+1}`,
      writer: '홍길동',
      views: Math.floor(Math.random()*100),
      comments: Math.floor(Math.random()*10)
    }));
    setArticles(mock);
    setSelectedIds([]);
  }

  const toggleSelect = (id) => {
    setSelectedIds(s =>
      s.includes(id) ? s.filter(x => x !== id) : [...s, id]
    );
  };

  const handleWrite = () => {
    if (board === 'notice') {
      if (user.role !== 'admin') {
        alert('권한이 없습니다.');
        return;
      }
    } else {
      if (!user.loggedIn) {
        alert('로그인이 필요합니다.');
        return;
      }
    }
    navigate(`/board/${board}/write`);
  };

  const handleEdit = () => {
    if (selectedIds.length !== 1) {
      alert('수정할 글을 하나만 선택하세요.');
      return;
    }
    const id = selectedIds[0];
    if (board === 'notice') {
      if (user.role !== 'admin') {
        alert('권한이 없습니다.');
        return;
      }
    } else {
      if (!user.loggedIn) {
        alert('로그인이 필요합니다.');
        return;
      }
    }
    navigate(`/board/${board}/edit/${id}`);
  };

  return (
    <div className="board-page">
      <h2 className="page-title">
        {board === 'notice' ? '공지게시판' : board === 'qna' ? '질답게시판' : '자유게시판'}
      </h2>
      <div className="table-wrapper">
 
        <table className="board-table">
          <thead>
            <tr>
              <th><input type="checkbox" disabled /></th>
              <th>번호</th>
              <th>분류</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>댓글수</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(a => (
              <tr key={a.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(a.id)}
                    onChange={() => toggleSelect(a.id)}
                  />
                </td>
                <td>{a.id}</td>
                <td>{a.category}</td>
                <td className="title-cell" onClick={() => navigate(`/board/${board}/${a.id}`)}>
                  {a.title}
                </td>
                <td>{a.writer}</td>
                <td>{a.views}</td>
                <td>{a.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>

      {/* 페이징 + 버튼을 같은 컨테이너에 */}
      <div className="pagination-container">
        <div className="pagination">
          <button
            className="page-btn"
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`page-btn${page === i+1 ? " active" : ""}`}
              onClick={() => setPage(i+1)}
            >
              {i+1}
            </button>
          ))}
          <button
            className="page-btn"
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
          >
            &gt;
          </button>
        </div>

        <div className="action-buttons">
          <button className="btn write">글쓰기</button>
          <button className="btn edit">수정</button>
        </div>
      </div>
    </div>
  );
}