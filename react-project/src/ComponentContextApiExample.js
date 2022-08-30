import React from 'react';

import { ColorConsumer } from './contexts/color';

//  Context Hook  사용 ( 함수형 컴포넌트에서만 사용 클래스형에서는 사용 안됨)
import { useContext } from 'react';
import ColorContext from './contexts/color';

// React에 전역적으로 사용할 데이타가 있을때 유용한 기능

const ComponentContextApiExample = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <ColorConsumer>
        {(value) => (
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.state.color,
            }}
          />
        )}
      </ColorConsumer>

      <br />
      {/* Hook 사용하여 Context 처리  */}
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ComponentContextApiExample;
