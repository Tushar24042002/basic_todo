import React from 'react'
import Todo from './Todo'

const Todos = ({data, deleteTodo, editTodo}) => {
  return (
    data && data?.map((e, index)=>{
        return(
            <Todo todoData={e}  key={index} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
    })
  )
}

export default Todos