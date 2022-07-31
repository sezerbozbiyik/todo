import React, { useState } from "react";
import "./Modal.css";
const Modal = ({ setIsShowModal, todo, updateTodo }) => {
  const [todoName, setTodoName] = useState(todo.name);

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        <button onClick={() => setIsShowModal(false)} className='close'>
          X
        </button>
        <form onSubmit={() => updateTodo({ id: todo.id, name: todoName })}>
          <input
            className='update-input'
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <button className='update-btn' type='submit'>
            {" "}
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
