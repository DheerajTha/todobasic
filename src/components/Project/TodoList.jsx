import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAutoDelete } from "react-icons/md";

const TodoList = ({ data, onHandlerDeleteTodo }) => {
  return (
    <>
      <div className="todo-item">
        <span> {data} </span>
        <button className="check-btn">
          <IoMdCheckmarkCircleOutline />
        </button>
        <button
          className="delete-btn"
          onClick={() => onHandlerDeleteTodo(data)}
        >
          <MdAutoDelete />
        </button>
      </div>
    </>
  );
};

export default TodoList;
