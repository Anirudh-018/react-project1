import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='name 1'/>
      <Todo text='name 2'/>
      <Todo text='name 3'/>
    </div>
  );
}

export default App;
