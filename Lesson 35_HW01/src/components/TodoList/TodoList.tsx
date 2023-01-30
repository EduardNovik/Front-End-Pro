import React from 'react';
import './TodoListStyle.css'
import { FcFullTrash, FcCheckmark } from "react-icons/fc";


import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodoItem } from '../../rdx/todoSlice';
import { AppDispatch } from '../../rdx/store'



const TodoList = () => {

  const dispatch = useDispatch<AppDispatch>()
  const filteredTodosRedux = useSelector((state: any) => state.createFilteredTodos.data);

  
  const deleteHandler = (id:any) => {
    dispatch(deleteTodoItem(id))
  }

  const completeHandler = (id: any) => {
    dispatch(completeTodo(id))
  }


  return (
    <div>
      {filteredTodosRedux.map((item: any) => {
        return (
          <div key={item.id} className={`todoBlock ${item.completed ? 'completed': ''} ${item.isDeleted ? 'fall': ''}`}>
            <p>{item.text}</p>
            <div>
              <button className='trashBtn' onClick={() => deleteHandler(item.id)}>
                  <FcFullTrash />
              </button>
              <button className={`doneBtn ${item.completed ? 'completed': ''}`} onClick={() => completeHandler(item.id)}>
                <FcCheckmark />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;



