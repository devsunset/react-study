import React from "react";
import { useState } from "react";

const ComponentUseStateExample = () => {
  // 첫번째 요소는 현재 상태 , 두번째 요소는 값을 바꿔주는 함수(Setter함수)
  const [message, setMessage] = useState("click");
  const onClickHi = () => setMessage("Hi");
  const onClickBye = () => setMessage("Bye");
  const [color, setColor] = useState("black");

  return (
    <div>
      <h3 style={{ color }}>{message}</h3>
      <button onClick={onClickHi}>Hi</button>
      <button onClick={onClickBye}>Bye</button>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>
    </div>
  );
};

export default ComponentUseStateExample;
