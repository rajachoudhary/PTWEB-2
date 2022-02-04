import React from 'react';
import style from "./TodoList.module.css"
export const TodoList = ({title,status}) => {
    
  return (
      <div className={style.list}>
      <div> Product : {title}</div>
      <div> Status : {`${status}`}</div>
      </div>
  );
};
