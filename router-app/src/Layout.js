import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  // Link 컴포넌트를 사용 하지 않고 다른 페이지로 이동 시 사용 하는  Hook
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    // 음수 뒤로 양수 앞으로 인자 숫자 만큼 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    // replace 사용시 페이지 이동시 현재 페이지를 이동 기록에 남기지 않음
    navigate('/articles', {
      replace: true,
    });
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
        {/* 중첨된 라우트와 Outlet은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을때 사용  */}
      </main>
    </div>
  );
};

export default Layout;
