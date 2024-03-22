import AddTodo from "./components/AddTodo";
import AppName from "./components/appName";
import Todoitem1 from "./components/todoItem1";
import TodoItem2 from "./components/todoItem2";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Todoitem1 />
        <TodoItem2 />
      </center>
    </>
  );
}

export default App;
