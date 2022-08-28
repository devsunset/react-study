// import logo from './logo.svg';
import "./App.css";
// import { Fragment }  from 'react';
import ComponentPropsExample from "./ComponentPropsExample";
import ComponentStateExample from "./ComponentStateExample";
import ComponentUseStateExample from "./ComponentUseStateExample";

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

// 함수형 컴포넌트
function App() {
  return (
    <div style={{ padding: 16 }}>
      <h2>JSX</h2>
      <hr />
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

      <h2>Component props</h2>
      <hr />

      <ComponentPropsExample name="React" />
      <ComponentPropsExample />
      <ComponentPropsExample>리액트</ComponentPropsExample>
      {/* 숫자를 입력하면 PropTypes string 으로 설정 했기 때문에 console 창에 에러 출력 */}
      {/* <ComponentPropsExample name={3} /> */}

      <h2>Component state - Class Component</h2>
      <hr />
      <ComponentStateExample />

      <h2>Component useState - function Component</h2>
      <hr />
      <ComponentUseStateExample />
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
}

export default App;

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
