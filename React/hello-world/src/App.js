import "./App.css";
import ClassClick from "./components/ClickEvent/ClassClick";
import EventBind from "./components/ClickEvent/EventBind";
import FunctionClick from "./components/ClickEvent/FunctionClick";
import ParentComponent from "./components/ClickEvent/ParentComponent";
import UserGreeting from "./components/Conditional/UserGreeting";
import ComponentC from "./components/context/ComponentC";
import Counter from "./components/Counter";
import Inline from "./components/CSS/Inline";
import StyleSheet from "./components/CSS/StyleSheets";
import ErrorHandle from "./components/ErrorBoundries/ErrorHandle";
import Hero from "./components/ErrorBoundries/Hero";
import Form from "./components/Forms/Form";
import FragmentDemo from "./components/Fragments/FragmentDemo";
import Greet from "./components/Great";
import Click from "./components/HOC/Click";
import Hover from "./components/HOC/Hover";
import GetList from "./components/Http Requests/GetList";
import PostUser from "./components/Http Requests/PostUser";
import ListElements from "./components/Loop/ListElement";
import RefDemo from "./components/RefsDemo/RefDemo";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <PostUser />
      {/* <hr /> */}
      {/* <GetList /> */}
      <hr />

      <ComponentC />

      <Click />
      <Hover />

      <ErrorHandle>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        {/* <Hero heroName="Joker" /> */}
      </ErrorHandle>

      <hr />
      <RefDemo />
      <FragmentDemo />

      <Form />
      <hr />

      <Inline />
      <StyleSheet isPrimary={true} />
      <ListElements />
      <UserGreeting />

      <ParentComponent />
      <EventBind></EventBind>
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="clark" heroName="SuperMan">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="clark" heroName="SuperMan" />
      <Welcome name="Diana" heroName="Wonder Woman" />
    </div>
  );
}

export default App;
