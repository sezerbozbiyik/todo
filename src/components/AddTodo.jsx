import React from "react";
import "./AddTodo.css";
const AddTodo = ({ addTodo, todo }) => {
  return (
    <div className='add-todo'>
      <form onSubmit={addTodo}>
        <label>
          <input
            placeholder='Add Todo...'
            className='add-input'
            type='text'
            ref={todo}
          ></input>
        </label>
        <button className='add-btn' type='submit'>
          {" "}
          Ekle{" "}
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
