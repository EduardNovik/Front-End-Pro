import React from 'react';
import './TodoListStyle.css'
import { FcFullTrash, FcCheckmark } from "react-icons/fc";


import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { updateTodo} from '../../rdx/todoSlice';



const TodoList = () => {

  const dispatch = useDispatch()
  const todosRedux = useSelector((state:any) => state.createTodos.data)
  const filteredTodosRedux = useSelector((state: any) => state.createFilteredTodos.data);


  const deleteHandler = (id:any) => {
      const newIsDeletedState = todosRedux.map((todo:any)=> todo.id !== id ? todo :
      {id:todo.id, text:todo.text, completed:todo.completed, isDeleted:!todo.isDeleted})
      dispatch(updateTodo(newIsDeletedState))

      setTimeout(()=>{
        const deleteTask = todosRedux.filter((todo:any) => todo.id !== id)
        dispatch(updateTodo(deleteTask))
      }, 300)
  }

  const completeHandler = (id: any) => {
    const newTodosRedux = todosRedux.map((todo: any) => todo.id !== id ? todo : 
    {id:todo.id, text:todo.text, completed:!todo.completed, isDeleted:todo.isDeleted})
    dispatch(updateTodo(newTodosRedux))
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



