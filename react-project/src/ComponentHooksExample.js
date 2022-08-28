import React from "react";
import { useState, useEffect } from "react";

const ComponentHooksExample = () => {
  // useState 컴포넌트에서 가변 적인 상태 처리
  // 첫번째 요소는 상태 값 , 두번째 요소는 상태를 바꾸는 함수
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect  컴포넌트가 렌더링 될때마다 특정 작업을 수행 하도록 설정
  // componentDidMount , componentDidUpdate를 합친 형태 기능
  useEffect(() => {
    console.log("랜더링이 완료 1");
    console.log({
      name,
      nickname,
    });
  });

  //  # update 시에는 실행 안하려고 하면 두번째 값을 빈 배열 할당 []
  //   useEffect(() => {
  //     console.log("랜더링이 완료 2");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   }, []); // update 시에는 실행 안하려고 하면 두번째 값을 빈 배열 할당 []

  //  # 특정 값이 업데이트 된 경우만 반영 두번째 인자 배열 값에 해당 값 설정
  //   useEffect(() => {
  //     console.log("랜더링이 완료 3");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   }, [name]); // 특정 값이 업데이트 된 경우만 반영 두번째 인자 배열 값에 해당 값 설정

  // # cleanup 함수 설정
  //   useEffect(() => {
  //     console.log("랜더링이 완료 4");
  //     console.log(name);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(name); // 업데이트 되기 직전의 값이 출력됨
  //     };
  //   }, [name]); // unmount 될때만 실행하고 싶다면 두번째 인자에 빈 배열 할당

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      현재 값 <b>{value}</b>
      <br />
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <br />
      <span>{name}</span>
      <input value={name} onChange={onChangeName} /> &nbsp;&nbsp;
      <span>{nickname}</span>
      <input value={nickname} onChange={onChangeNickname} />
    </div>
  );
};

export default ComponentHooksExample;
