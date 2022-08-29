import React from "react";
import logo from "./logo.svg";
import "./ComponentStyleExample.scss";

// 일반 CSS
// Sass
// CSS Module
// styled-components

const ComponentStyleExample = () => {
  return (
    <div>
      <span>일반 CSS - App.css</span>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div>
        <span>Sass - yarn add sass</span>
        <span>ComponentStyleExample.scss + sytels/utils.scss</span>
      </div>
      <div className="ComponentStyleExample">
        <div className="box red" />
        <div className="box orange" />
        <div className="box yellow" />
        <div className="box green" />
        <div className="box blue" />
        <div className="box indigo" />
        <div className="box violet" />
      </div>
      <div>
        sass-loader 설정 커스터 마이징 - yarn eject (git 연동중이라면 모든거
        commit후 실행)
      </div>
    </div>
  );
};

export default ComponentStyleExample;
