import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import "./Todo.css";

const TodoList = ({
  todos,
  search,
  handleDeleteClick,
  currentPage,
  todoPerPage,
  handleUpdateTodo,
}) => {
  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const currentTodo = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const [isShowModal, setIsShowModal] = useState(false);
  const [todo, setTodo] = useState([]);

  const handleClick = (editTodo) => {
    setIsShowModal(true);
    setTodo(editTodo);
  };

  const updateTodo = (newTodo) => {
    setIsShowModal(false);
    handleUpdateTodo(newTodo);
  };

  return (
    <ul className='todo-container'>
      {!search &&
        currentTodo.map((todo, index) => (
          <li key={todo.id} className='todo-list'>
            <div className='todo-num'>{index + 1}</div>
            <div className='todo-text'>
              <span>{todo.name}</span>
              <div className='todo-edit'>
                <FaEdit className='update' onClick={() => handleClick(todo)} />
                <FaTrashAlt
                  className='delete'
                  onClick={() => handleDeleteClick(todo.id)}
                />
              </div>
            </div>
          </li>
        ))}
      {search &&
        todos
          .filter((todo) => todo.name.includes(search))
          .map((todo, index) => (
            <li key={todo.id} className='todo-list'>
              <div className='todo-num'>{index + 1}</div>
              <div className='todo-text'>
                <span>{todo.name}</span>
                <div className='todo-edit'>
                  <FaEdit
                    className='update'
                    onClick={() => handleClick(todo)}
                  />
                  <FaTrashAlt
                    className='delete'
                    onClick={() => handleDeleteClick(todo.id)}
                  />
                </div>
              </div>
            </li>
          ))}
      {isShowModal && (
        <Modal
          updateTodo={updateTodo}
          todo={todo}
          setIsShowModal={setIsShowModal}
        />
      )}
    </ul>
  );
};

export default TodoList;
