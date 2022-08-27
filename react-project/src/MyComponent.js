// Snippet -> rsc
import React from "react";
import PropTypes from "prop-types";

// const MyComponent = (props) => {

// 비구조화 할당 문법
// const { name, children } = props;
const MyComponent = ({ name, age, children }) => {
  return (
    <div>
      {/* Component example : propes : {props.name} , children : {props.children}  - 기본 props 사용 방법 */}
      Component example # name : {name} ,age : {age} ,children : {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default",
};

// https://github.com/facebook/prop-types
MyComponent.propTypes = {
  name: PropTypes.string,
  // isRequired 선언 했는데 해당 값이 props 없으면  console에 에러 출력 됨
  // age: PropTypes.number.isRequired,
};

export default MyComponent;

// Snippet -> rcc
// import React, { Component } from 'react';

// class MyComponent extends Component {
//     render() {
//         return (
//             <div>
//                  Component example
//             </div>
//         );
//     }
// }

// export default MyComponent;
