import React from "react";
import { v4 as uuid } from "uuid";
import { TodoList } from "./TodoList";
import style from "./Todo.module.css";
export const TodoInput = () => {
  let [query, setquery] = React.useState("");
  let [todo, setTodo] = React.useState([]);
  const handleAdd = (query) => {
    let payload = {
      query,
      status: false,
      id: uuid()
    };
    if (query) {
      setTodo([...todo, payload]);
      setquery("");
    } else {
      alert("Please fill the input box");
    }
  };

  const handleDelete = (id) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
  };

  const handleToggle = (id) => {
    const updateTodo = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(updateTodo);
  };
  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        placeholder="Type here"
        value={query}
        onChange={(e) => setquery(e.currentTarget.value)}
      />
      <button onClick={() => handleAdd(query)}>Add</button>
      {todo.map((item) => (
        <TodoList
          key={item.id}
          {...item}
          toggleStatus={handleToggle}
          deleteItem={handleDelete}
        />
      ))}
    </div>
  );
};
