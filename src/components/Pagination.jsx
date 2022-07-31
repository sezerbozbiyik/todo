import React from "react";
import "./Pagination.css";

const Pagination = ({ todosLength, todoPerPage, handlePaginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(todosLength / todoPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map((number) => (
        <li key={number} className='page-item'>
          <a
            onClick={() => handlePaginate(number)}
            href='!#'
            className='page-link'
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
