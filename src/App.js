import "./App.css";
import TodoList from "./components/Todo";
import { useRef, useState } from "react";
import AddTodo from "./components/AddTodo";
import Pagination from "./components/Pagination";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todoPerPage = 10;
  const todo = useRef();

  // add Todo
  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      name: todo.current.value,
    };

    setTodos((prevTodo) => [...prevTodo, newTodo]);

    resetForm();
  };

  const resetForm = () => {
    todo.current.value = "";
  };

  // delete todo
  const handleDeleteClick = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => id !== todo.id));
  };

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // update Todo
  const handleUpdateTodo = (updatedTodo) => {
    // console.log(updatedTodo)
    setTodos((prevTodo) => {
      return [
        updatedTodo,
        ...prevTodo.filter((todo) => todo.id !== updatedTodo.id),
      ];
    });
  };

  return (
    <div className='App'>
      <h3> Todo App</h3>
      <AddTodo addTodo={addTodo} todo={todo} />
      <div>
        <input
          type='text'
          className='search-todo'
          placeholder='Search Todo...'
          onChange={(e) => setSearch(e.target.value.trim())}
        ></input>
      </div>
      <div className='todos'>
        <TodoList
          todos={todos}
          search={search}
          currentPage={currentPage}
          todoPerPage={todoPerPage}
          handleDeleteClick={handleDeleteClick}
          handleUpdateTodo={handleUpdateTodo}
        />
        <Pagination
          todoPerPage={todoPerPage}
          todosLength={todos.length}
          handlePaginate={handlePaginate}
        />
      </div>
    </div>
  );
}

export default App;
