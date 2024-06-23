import React from 'react'

const Todo = ({todoData, index, deleteTodo, editTodo}) => {
  return (
   <div className='todo' key={index}>
    <p>{todoData}</p>
    <span className='deleteButton' onClick={()=>deleteTodo(index)}>Delete</span>
    <span className='edit' onClick={()=>editTodo(index)}>Edit</span>
   </div>
  )
}

export default Todo