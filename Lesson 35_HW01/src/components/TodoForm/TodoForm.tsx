import React, { useState } from 'react';
import './TodoFormStyle.css'
import { FaPaperPlane } from 'react-icons/fa';
import { addTodo } from '../../rdx/todoSlice';
import { useDispatch } from 'react-redux';


const TodoForm = ({ setStatus }: any) => {
    
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const inputTextHandler = (e: any) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      addTodo({
        text: inputText,
      })
    );
    setInputText("");
  };

  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <form className="inputBlock">
      <input
        className="todoInput"
        type="text"
        value={inputText}
        onChange={inputTextHandler}
      />
      <button className="btnAdd" onClick={submitTodoHandler}>
        <FaPaperPlane />
      </button>
      <div className="selectBlock">
        <select name="todos" id="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;

