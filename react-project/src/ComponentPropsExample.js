// Snippet -> rsc (함수형)
import React from "react";
import PropTypes from "prop-types";

// const ComponentPropsExample = (props) => {

// 비구조화 할당 문법
// const { name, children } = props;
const ComponentPropsExample = ({ name, age, children }) => {
  return (
    <div>
      {/* Component example : propes : {props.name} , children : {props.children}  - 기본 props 사용 방법 */}
      Component props example # name : {name} ,age : {age} ,children :{" "}
      {children}
    </div>
  );
};

ComponentPropsExample.defaultProps = {
  name: "default",
};

// https://github.com/facebook/prop-types
ComponentPropsExample.propTypes = {
  name: PropTypes.string,
  // isRequired 선언 했는데 해당 값이 props 없으면  console에 에러 출력 됨
  // age: PropTypes.number.isRequired,
};

export default ComponentPropsExample;

// Snippet -> rcc (클래스)
// import React, { Component } from 'react';
// import PropTypes from "prop-types";

// class ComponentPropsExample extends Component {
// const {name , age, children } = this.propers; // 비구조 할당

// Class 내부에 지정 하는 방식
// static defaultProps = {
//   name: "default",
// };

// static  propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// };

//     render() {
//         return (
//             <div>
//                 Component example # name : {name} ,age : {age} ,children : {children}
//             </div>
//         );
//     }
// }

// Class 외부에 지정 하는 방식
// ComponentPropsExample.defaultProps = {
//   name: "default",
// };

// ComponentPropsExample.propTypes = {
//   name: PropTypes.string,
//    age: PropTypes.number.isRequired,
// };

// export default ComponentPropsExample;
