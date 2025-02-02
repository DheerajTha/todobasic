import React, { useState } from 'react'

const TodoFrom = ({onAddTodo}) => {

      const [inputValue, setinputValue] = useState("");

      const inputHandlerChange = (value) => {
        setinputValue(value);
      };

      const handlerSumit = (event) =>{
        onAddTodo(inputValue);
        event.preventDefault();
        setinputValue("");


      }

  return (
    <>
       <section className="form">
                 <form onSubmit={handlerSumit}>
                   <div>
                     <input
                       type="text"
                       className="todo-input"
                       placeholder="Text"
                       autoComplete="off"
                       value={inputValue}
                       onChange={(e) => inputHandlerChange(e.target.value)}
                     />
                   </div>
                   <div>
                     <button type="submit" className="todo-btn">
                       Add Task
                     </button>
                   </div>
                 </form>
               </section> 
      
    </>
  )
}

export default TodoFrom;
