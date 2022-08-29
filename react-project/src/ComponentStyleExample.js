import React from "react";
import logo from "./logo.svg";
import "./ComponentStyleExample.scss";
import styles from "./ComponentStyleExample.module.css";
import classNames from "classnames/bind";
import styled, { css } from "styled-components";

// 일반 CSS
// Sass
// CSS Module
// styled-components

const cx = classNames.bind(styles);

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

// Tagged 템플릿 리터럴
const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

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
        <br />
        config/webpack.config.js 파일 assRegex 기술 부분 수정하여 scss파일
        인식시 상대 경로 아닌 절대 경로로 인식 ex) @import "./styles/utils"; -
        @import "utils.scss";
        <br />
        additionalData: "@import 'utils';", 구문 추가하면 모든 파일에 기본적으로
        해당 내용 추가 됨
      </div>
      {/* <div className={(styles.wrapper, styles.inverted)}> */}
      <div className={cx("wrapper", "inverted")}>
        CSS Module -  CSS 불러와서 사용할때 클래스 이름을 고유한 값
        [파일이름]_[클래스이름]__[해시값] 형태로 자동으로 만들어서 클래스 중첩
        안되게 처리 됨<div className="something">CSS Module</div>
        <div className={classNames({ something: true })}>
          동적 className 처리 classnames - yarn add classnames
        </div>
      </div>
      <div>
        styled-components (js 파일 안에 style 선언) - yarn add styled-components
        <Box color="black">
          <Button>안녕하세요</Button>
          <Button inverted={true}>테두리만</Button>
        </Box>
      </div>
    </div>
  );
};

export default ComponentStyleExample;
