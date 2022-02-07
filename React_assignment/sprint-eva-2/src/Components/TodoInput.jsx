import React from "react";
import { v4 as uuid } from "uuid";
import { TodoList } from "./TodoList";
import style from "./Todo.module.css";
export const TodoInput = () => {
 let [query, setQuery] = React.useState("");
  let [todos, setTodos] = React.useState([]);

  const handleAdd = (query) => {
    const payload = {
      query,
      status: false,
      id: uuid()
    };
    
    if (query) {
      
      const updateTodo = [...todos, payload];
      setTodos(updateTodo);
      setQuery("")
      
    } else {
      alert("Please write the product name");
    }
    
  };

  const handleStatus = (id) => {
    const updateStatus = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updateStatus);
  };

  const updateDelete = (id) => {
    const updateTodo = todos.filter((item) => item.id !== id);
    setTodos(updateTodo);
  };

  
  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        placeholder="Type Product"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => handleAdd(query)}>Add</button>
      <div>
        {todos.map((item) => (
          <TodoList
            {...item}
            key={item.id}
            handleToggle={handleStatus}
            handleDelete={updateDelete}
            
          />
        ))}
      </div>
    </div>
  );
};
