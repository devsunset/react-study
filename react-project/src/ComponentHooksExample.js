import React from "react";
import {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
  useRef,
} from "react";
// import useInputs from "./useInput";

// 컴포넌트 업데이트 로직을 Component 외부로 이동 가능
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { valuesub: state.valuesub + 1 };
    case "DECREMENT":
      return { valuesub: state.valuesub - 1 };
    default:
      return state;
  }
}

function reducersub(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const getAverage = (numbers) => {
  console.log("평균값 게산 중 ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const ComponentHooksExample = () => {
  // useState 컴포넌트에서 가변 적인 상태 처리
  // 첫번째 요소는 상태 값 , 두번째 요소는 상태를 바꾸는 함수
  const [value, setValue] = useState(0);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  // useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을때 사용
  const [state, dispatch] = useReducer(reducer, { valuesub: 0 });
  const [statesub, dispatchsub] = useReducer(reducersub, {
    namesub: "",
    nicknamesub: "",
  });

  // useEffect  컴포넌트가 렌더링 될때마다 특정 작업을 수행 하도록 설정
  // componentDidMount , componentDidUpdate를 합친 형태 기능
  useEffect(() => {
    console.log("랜더링이 완료 1");
    console.log({
      name,
      nickname,
    });
  });

  const onChange = (e) => {
    dispatchsub(e.target);
  };

  //  # update 시에는 실행 안하려고 하면 두번째 값을 빈 배열 할당 []
  //   useEffect(() => {
  //     console.log("랜더링이 완료 2");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   }, []); // update 시에는 실행 안하려고 하면 두번째 값을 빈 배열 할당 []

  //  # 특정 값이 업데이트 된 경우만 반영 두번째 인자 배열 값에 해당 값 설정
  //   useEffect(() => {
  //     console.log("랜더링이 완료 3");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   }, [name]); // 특정 값이 업데이트 된 경우만 반영 두번째 인자 배열 값에 해당 값 설정

  // # cleanup 함수 설정
  //   useEffect(() => {
  //     console.log("랜더링이 완료 4");
  //     console.log(name);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(name); // 업데이트 되기 직전의 값이 출력됨
  //     };
  //   }, [name]); // unmount 될때만 실행하고 싶다면 두번째 인자에 빈 배열 할당

  const [list, setList] = useState([]);
  const [number, setNumber] = useState([]);
  // # useMemo 함수 컴포넌트 내부에서 발생하는 연산을 최소화
  const avg = useMemo(() => getAverage(list), [list]);

  // # useCallback 함수 useMemo와 비슷 랜더링 성능 최적화 만들어 두었던 함수 재사용
  //   onChangeNubmer , onInsert 함수의 경우 랜더링 될때마다 새로 만들어진 함수가 사용됨
  const onChageNumber = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 랜더링 될때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  //   const onChageNumber = (e) => {
  //     setNumber(e.target.value);
  //   };

  //   const onInsert = (e) => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber("");
  //   };

  //   # useRef  funciton에서 ref사용하기 위한 처리
  const inputEl = useRef(null);

  // 로컬 변수를 사용할때도 useRef사용
  // 값이 바뀌어도 랜더링되지 않음 - 랜더링과 관련되지 않은 값을 관리 할때 사용
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };

  // Custom Hooks 사용 (userInput.js)
  //   const [state, onChange] = useInputs({
  //     name: " ",
  //     nicknamec: "",
  //   });
  //   const { name, nickname } = state;

  return (
    <div>
      현재 값 <b>{value}</b>
      <br />
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <br />
      <span>{name}</span>
      <input value={name} onChange={onChangeName} /> &nbsp;&nbsp;
      <span>{nickname}</span>
      <input value={nickname} onChange={onChangeNickname} />
      <br />
      현재 값 <b>{state.valuesub}</b>
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <br />
      <span>{statesub.namesub}</span>
      <input name="namesub" value={statesub.namesub} onChange={onChange} />{" "}
      &nbsp;&nbsp;
      <span>{statesub.nicknamesub}</span>
      <input
        name="nicknamesub"
        value={statesub.nicknamesub}
        onChange={onChange}
      />
      <br />
      <input value={number} onChange={onChageNumber} ref={inputEl} />
      <button onClick={onInsert}>add</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
        <div>
          <b>평균값 : </b>
          {getAverage(list)}
        </div>
        <div>
          {/*  useMemo 사용시 add 될때만 getAverage 호출 */}
          <b>평균값 useMemo : </b>
          {avg}
        </div>
      </ul>
      <button onClick={setId(2)}>ref value change</button>
      <button onClick={printId}>print ref value</button>
      <br />
      Hooks
      <br />
      https://nikgraf.github.io/react-hooks/
    </div>
  );
};

export default ComponentHooksExample;
