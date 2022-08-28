import "./App.css";
import ComponentJSXExample from "./ComponentJSXExample";
import ComponentPropsExample from "./ComponentPropsExample";
import ComponentStateExample from "./ComponentStateExample";
import ComponentUseStateExample from "./ComponentUseStateExample";
import ComponentClassEventExample from "./ComponentClassEventExample";
import ComponentFunctionEventExample from "./ComponentFunctionEventExample";
import ComponentRefExample from "./ComponentRefExample";
import ComponentIterationExample from "./ComponentIterationExample";

function App() {
  return (
    <div style={{ padding: 16 }}>
      <hr />
      <h2>JSX - ComponentJSXExample</h2>
      <ComponentJSXExample />
      <hr />
      <h2>Props - ComponentPropsExample</h2>
      <ComponentPropsExample name="React" />
      <ComponentPropsExample />
      <ComponentPropsExample>리액트</ComponentPropsExample>
      {/* 숫자를 입력하면 PropTypes string 으로 설정 했기 때문에 console 창에 에러 출력 */}
      {/* <ComponentPropsExample name={3} /> */}
      <hr />
      <h2>State - ComponentStateExample</h2>
      <ComponentStateExample />
      <hr />
      <h2>UseState - ComponentUseStateExample</h2>
      <ComponentUseStateExample />
      <hr />
      <h2>Event - ComponentClassEventExample</h2>
      <ComponentClassEventExample />
      <hr />
      <h2>Event - ComponentFunctionEventExample</h2>
      <ComponentFunctionEventExample />
      <hr />
      <h2>Ref - ComponentRefExample</h2>
      <ComponentRefExample />
      {/* Class 컴포넌트에서는 아래와 같이 Component에 ref 값으로 접근 가능 - 되도록
      사용 지양 현재 App.js는 함수형이라 아래구문 사용 X
      <ComponentRefExample ref={(ref) => (this.componentRefExample = ref)} />
      <button onClick={() => this.componentRefExample.handlerClick()} /> */}
      <hr />
      <h2>Iteration - ComponentIterationExample</h2>
      <ComponentIterationExample />
    </div>
  );
}

export default App;
