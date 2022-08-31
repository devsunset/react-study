import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/about?detail=true&mode=1">소개</Link>
        </li>
        <li>
          <Link to="/profiles/test1">test1</Link>
        </li>
        <li>
          <Link to="/profiles/test2">test2</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
