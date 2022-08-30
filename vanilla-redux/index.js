import { createStore } from "redux";

// DOM 레퍼런스 만들기
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 타입
const TOOGLE_SWITCH = "TOOGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수 정의
const toggleSwitch = () => ({ type: TOOGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기 값 정의
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
// state가 undefined 일 때는 initialState를 기본 값으로 사용
function reducer(state = initialState, action) {
  // action type 에 따른 작업 처리
  switch (action.type) {
    case TOOGLE_SWITCH:
      return {
        ...state, // 불변성 유지 처리
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
  const state = store.getState();
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  // 카운터 처리
  counter.innerText = state.counter;
};

render();

// 구독하기
store.subscribe(render);

// 액션 발생 시키기
divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onClick = () => {
  store.dispatch(increase());
};

btnDecrease.onClick = () => {
  store.dispatch(decrease());
};

// 리덕스 사용 3가지 규칙
// 1. 단일 스토어
// 2. 읽기 전용 상태
// 3. 리듀서는 순수한 함수
