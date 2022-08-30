import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  // 로딩중 / 완료 / 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  // useEffect에 aysnc 사용 하면 안됨 내부에서 async function 생성 해서 호출
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
