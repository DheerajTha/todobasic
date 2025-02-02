import React, { useState } from "react";
import "./Todo.css";

import TodoDate from "./TodoDate";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoStorge";

const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handlerSumit = (inputValue) => {
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
  };

  // localStorage

  setLocalStorageTodoData(task);

  const handlerDeletebtn = (value) => {
    console.log(task);
    console.log(value);
    const updateTask = task.filter((curTask) => curTask !== value);
    setTask(updateTask);
  };

  const handlerButton = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List </h1>
          <TodoDate />
        </header>
        <TodoFrom onAddTodo={handlerSumit} />

        <section className="myUnOrdList">
          <div>
            {task.map((currEle, index) => {
              return (
                <TodoList
                  key={index}
                  data={currEle}
                  onHandlerDeleteTodo={handlerDeletebtn}
                />
              );
            })}
          </div>
        </section>
        <section>
          <button className="clear-btn" onClick={handlerButton}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
