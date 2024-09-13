import "./App.css";
import Counter from "./Counter";
import Greeting from "./Greeting";
import Hotel from "./Hotel";
import TextBtn from "./TextBtn";
import ToggleMessage from "./ToggleMessage";

import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <Greeting />
      <Hotel number={15} cleaner="Victor" time="14:15" />
      <TextBtn />
      <Counter />
      <Counter2 />
      <ToggleMessage />

      <Counter3 />
      <ToDoList />
    </>
  );
}

export default App;
