import style from "./Todo.module.css";
export const TodoList = ({ query, status, id, toggleStatus, deleteItem }) => {
  return (
    <div className={style.listContainer}>
      <div>{query}</div>
      <button onClick={() => toggleStatus(id)}>
        {status ? "True" : "False"}
      </button>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
};
