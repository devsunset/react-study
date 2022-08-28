import React from "react";
import { useState } from "react";

// arr.map(calback, [thisArg]);

// *callback : 새로운 배열의 요소를 생성하는 함수
// - currentValue : 현재 처리 하고 있는 요소
// - index ; 현재 처리하고 있는 요소의 index
// - array : 현재 처리 하고 있는 요소의 원본 배열의

// *thisArgs (선택항목) : callback 함수 내부에서 사용할 this  레퍼런스

// ex)
var numbers = [1, 2, 3, 4, 5];

var processed = numbers.map(function (num) {
  return num * num;
});
console.log(processed);

// ES6문법
var result = numbers.map((num) => num * num);
console.log(result);

var resultfilter = numbers.filter((num) => num > 3);
console.log(resultfilter);

// Basic
// const ComponentIterationExample = () => {
//   const front = ["react", "vue", "angular"];

//   //    Warning: Each child in a list should have a unique "key" prop.
//   //   const frontList = front.map((program) => <li>{program}</li>);

//   // key  unique 값으로 설정 (index를 key로 사용하면 배열이 변경될 때 효율적으로 렌더링 하지 못함)
//   const frontList = front.map((program, index) => (
//     <li key={index}>{program}</li>
//   ));

//   return <ul>{frontList}</ul>;
// };

const ComponentIterationExample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // concat는 신규 배열 생성 ,  push 함수는 기존 배열에 영향
      // 리액트에서는 상태 갱신시 기존 상태 유지 하고 새로 설정 해주어야 함
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default ComponentIterationExample;
