import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import ParentComponent from "./components/useCallBack/ParentComponent";
import CountEffect from "./components/useEffects/CountEffect";
import CountReducer from "./components/useReducer/countReducer";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounter2";

function App() {
  return (
    <div className="App">
      <hr />
      <ParentComponent />
      <hr />
      <CountReducer />
      <FetchData />
      <CountEffect />
      <HookCounterTwo />
      <HookCounter />
    </div>
  );
}

export default App;
