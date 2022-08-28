import React, { Component } from "react";

class ComponentStateExample extends Component {
  //   생성자에서 state 선언하는 방법
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fiexdNumber: 0,
  //     };
  //   }

  //  state 선언
  state = {
    number: 0,
    fiexdNumber: 0,
  };

  render() {
    const { number, fiexdNumber } = this.state;
    return (
      <div>
        <h3>
          {number} : {fiexdNumber}
        </h3>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            // 두번 호출한다고 증가하지 않음 (비동기처리기 때문) - 아래 버튼 처럼 함수형으로 처리 해야 2씩 증가함
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>

        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });

            // 함수에서 바로 객체 반환 (위와 동일 처리)
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1 (함수형 호출)
        </button>

        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("callback function call");
              }
            );
          }}
        >
          +1 (함수 호출시 callback function)
        </button>
      </div>
    );
  }
}

export default ComponentStateExample;
