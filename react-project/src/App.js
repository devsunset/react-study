// import logo from './logo.svg';
import "./App.css";
// import { Fragment }  from 'react';

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

function App() {
  return (
    <div>
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

      <h1>hello world</h1>
      <h1>{study}</h1>

      {study === "react" ? <h1>react</h1> : <h2>react</h2>}

      {study === "react" ? <h1>react</h1> : null}

      {study === "react" && <h1>react</h1>}

      {/*  숫자는 0이어도 렌더링 됨  */}
      {number && <h1>{number}</h1>}

      <h1>{temp || "value is undefined"}</h1>

      <input></input>
      <input />
    </div>

    // <Fragment >
    //     <h1> hello world</h1>
    //     <h1>{study}</h1>
    // </Fragment  >

    // < >
    // <h1>hello world</h1>
    // <h1>react</h1>
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
