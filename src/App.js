import "./App.css";
import "../src/Screens/todo.css";
import { useState } from "react";
import Todos from "./Screens/Todos";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  const handleText = (e) => {
    setText(e?.target?.value);
  };

  const add = () => {
    if (isEdit) {
      const newData = [...data];
      newData[id] = text;
      setData(newData);
    } else {
      setData((prev) => [...prev, text]);
    }
    setId(null);
    setIsEdit(false);
    setText("");
  };

  const deleteTodo = (id) => {
    const newData = data?.filter((e) => e != data[id]);
    setData(newData);
  };
  const editTodo = (id) => {
    setId(id);
    setText(data[id]);
    setIsEdit(true);
  };
  return (
    <div className="App">
      <input type="text" value={text} onInput={handleText} />
      <button type="button" className="button" onClick={() => add()}>
        Add Todo
      </button>
      <Todos data={data} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
