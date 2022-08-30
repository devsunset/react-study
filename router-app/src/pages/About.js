import { useSearchParams, useLocation } from 'react-router-dom';

const About = () => {
  // 쿼리 스트링
  const location = useLocation();

  // 쿼리 스트링 파싱 hook useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    // searchParams.set('detail', detail === 'true' ? false : true);
    const currentMode = mode === null ? 1 : mode;
    setSearchParams({
      detail: detail === 'true' ? false : true,
      mode: currentMode,
    });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리 스트링 pathname : {location.pathname}</p>
      <p>쿼리 스트링 search : {location.search}</p>
      <p>쿼리 스트링 hash: {location.hash}</p>
      <p>쿼리 스트링 state: {location.state}</p>
      <p>쿼리 스트링 key: {location.key}</p>
      <hr />
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
