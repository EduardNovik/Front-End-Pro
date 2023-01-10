import React from 'react';
import './TodoListStyle.css'
import { FcFullTrash, FcCheckmark } from "react-icons/fc";



const TodoList = (props: any) => {

  const deleteHandler = (id:any) => {
      const newIsDeletedState = props.todos.map((todo:any)=> todo.id !== id ? todo :
      {id:todo.id, text:todo.text, completed:todo.completed, isDeleted:!todo.isDeleted})
      props.setTodos(newIsDeletedState)

      setTimeout(()=>{
        const deleteTask = props.todos.filter((todo:any) => todo.id !== id)
        props.setTodos(deleteTask)
      }, 300)
  }

  const completeHandler = (id: any) => {
    const newCompletedState = props.todos.map((todo: any) => todo.id !== id ? todo : 
    {id:todo.id, text:todo.text, completed:!todo.completed, isDeleted:todo.isDeleted})
    props.setTodos(newCompletedState);
  };


  return (
    <div>
      {props.filteredTodos.map((item: any) => {
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

