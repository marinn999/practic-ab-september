import "../App/index.css";
import Counter from "../Counter/Counter";
import Greeting from "../Greeting";
import Hotel from "../Hotel";
import TextBtn from "../TextBtn";
import ToggleMessage from "../ToggleMessage";

import Counter2 from "../Counter/Counter2";
import Counter3 from "../Counter/Counter3";
import ToDoList from "../ToDoList/ToDoList";
import Voting from "../Voting";
import Something from "../Something";

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
      <Voting />
      <Something />
    </>
  );
}

export default App;
