import { Route, Routes } from 'react-router-dom';
// index.js 파일 에 아래와 같이 선언 필요
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

import Layout from './Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      {/* <Route path="주소규칙" element={보여 줄 컴포넌트 JSX}></Route> */}
      <Route path="/" element={<Layout />}>
        {/* index page 설정  index   path=/ 와 동일 기능*/}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* URL 파라미터 */}
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>

      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />

      {/* Not Found 페이지 처리 -상단에 있는 Route규칙 모두 확인 하고 없으면 해당 Route 실행 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
