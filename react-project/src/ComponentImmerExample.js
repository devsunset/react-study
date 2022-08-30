import React, { useRef, useCallback, useState } from "react";
import produce from "immer";

// immer 불변성을 유지 하는 작업을 간단하게 처리
// ex)  사용법 예시
// import produce from 'immer';
// const nextState = prodcue(originalState, draft => {
//     // 바꾸고 싶은 값 바꾸기
//     draft.somewhere.deep.inside = 5;
// });

const ComponentImmerExample = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  //   const onChange = useCallback((e) => {
  //     const { name, value } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: [value],
  //     });
  //   }, []);

  // input 수정을 위한 함수 (immer 사용)
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      // produce(form, draft => {
      //   draft[name] = value;
      // })

      // 위와 같은 내용을 아래 처럼 사용
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  // form 등록을 위한 함수
  //   const onSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       const info = {
  //         id: nextId.current,
  //         name: form.name,
  //         username: form.username,
  //       };

  //       // array 에 새 항목 등록
  //       setData({
  //         ...data,
  //         array: data.array.concat(info),
  //       });

  //       // form 초기화
  //       setForm({
  //         name: "",
  //         username: "",
  //       });
  //       nextId.current += 1;
  //     },
  //     [form.name, form.username]
  //   );

  // form 등록을 위한 함수 (immer 사용)
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array 에 새 항목 등록
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  //   const onRemove = useCallback((id) => {
  //     setData({
  //       ...data,
  //       array: data.array.filter((info) => info.id !== id),
  //     });
  //   }, []);

  // 항목을 삭제하는 함수 (immer 사용)
  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComponentImmerExample;
