// will 접두사 (실행전)
// Did 접두사 (실행후)
// mount , update , unmount

// 마운트 할때 호출 메소드
// constructor -> getDerivedStateFromProps -> render -> componentDidMount

// 업데이트
// 1. props 바뀔때
// 2. state 바뀔때
// 3. 부모 컴포넌트 리렌더링
// 4. this.forceUpdate로 강제로 렌더링을 트리거
// getDerivedStateFromProps ->shouldComponentUpdate (true, false 반환 false반환시 작업 중지) -> render  (this.forceUpdate 호출시 이시점에서 바로 처리)-> getSnapshotBeforeUpdate -> componentDidUpdate

//언마운트
// componentWillUnmount

import React, { Component } from "react";
class ComponentLifeCycleExample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null; // ref를 설정할 부분
  // 초기 state 정의
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  // v16.3 이후 props에 받아온 정보를 state에 동기화 하는 용도
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  // 첫 렌더링을 맞춘 후 실행 다른 자바스크립트 라이브러리 및 프레임워크 함수 호출
  //  이벤트 등록,  setTimeout, setInterval, 네트워크 요청등의 비동기 작업 처리
  componentDidMount() {
    console.log("componentDidMount");
  }
  // props , state 값 변경시 리렌더링 여부 지정
  // 반드시 true , false  값 반환 (false 반환시 렌덩링 중지)
  // 현재는 this, 새로 설정되는거는 next로 접근
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }
  // Component  DOM에서 제거 전
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  // v16 렌더링중 에러 발생시 표시
  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  // v16.3  render 생성된 결과물이 브라우저 표시 전에 호출
  // 업데이트 직전의 값을 참조시 사용
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  // 리렌더링 완료 후 호출
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }
  // 유일한 필수 메소드
  // this.props , this.state에 접근 가능
  // 이벤트 설정이 아닌 곳에서 setState 사용 하면 안됨 브라우저의 DOM 에 접근 해도 안됨
  // DOM 정보를 가져오거나 state에 변화를 줄때는 componentDidMount에서 처리
  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default ComponentLifeCycleExample;
