import React from "react";
// import { Fragment }  from 'react';
// import logo from './logo.svg';

const study = "react";
const number = 0;
const temp = undefined;

const style = {
  backgroundColor: "black",
  color: "aqua",
  fontsize: "48px",
  fontWeight: "bold",
  padding: 16,
};

const ComponentJSXExample = () => {
  return (
    <div>
      <div>hello world</div>
      <div>{study}</div>
      {study === "react" ? <div>react O</div> : <h2>react X</h2>}
      {study === "react" ? <div>react</div> : null}
      {study === "react" && <div>react</div>}
      {/*  숫자는 0이어도 렌더링 됨  */}
      {number && <div>{number}</div>}
      <div>{temp || "value is undefined"}</div>

      <div style={style}>{study}</div>
      {/* 주석 처리 */}
      <div
        style={{
          backgroundColor: "green", // 주석
          color: "aqua",
          fontsize: "48px",
          fontWeight: "bold",
          padding: 16,
        }}
      >
        {study}
      </div>
      <div className="react">{study}</div>
    </div>

    // <Fragment >
    //     <div> hello world</div>
    //     <div>{study}</div>
    // </Fragment  >

    // < >
    // <div>hello world</div>
    // <div>react</div>
    // </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};

export default ComponentJSXExample;

/*
// 클래스형 컴포넌트 
// state  기능 및 라이프 사이클 기능 사용 , 임의 메소드 정의 
// render 함수 반드시 존재 JSX  반환
import { Component } from 'react';

class App extends Component {
  render(){
    const study = 'react';
    return <div className= 'react'>{study}</div>
  }
}
export default App;
*/
