import { NavLink } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <li>
      {/* NavLink 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치 하는 경우 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트 */}
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
