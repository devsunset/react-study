import React, { Component } from "react";

// 이벤트 이름은 카멜 표기법으로 작성 onclick -> onClick
// 이벤트 실행할 자바스크립트 코드를 전달하는 것이 아니라 함수 형태의 값 전달
// DOM 요소에만 이벤트 설정 가능 (Custom Component에 이벤트 설정 불가)
class ComponentClassEventExample extends Component {
  state = {
    username: "",
    message: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default ComponentClassEventExample;
