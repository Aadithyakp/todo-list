import React from 'react'

function TodoListComponent(props) {

  return (
    <>
      {props.todos.map((todo) => {
        return(
          <div key={todo.id} className="flex justify-between mt-4 ml-10 mr-10 bg-gray-200 shadow-lg p-2 rounded-xl ">
           <span onClick={() => {props.handleEdit(todo)}} className='cursor-pointer ml-5 flex justify-center  items-center	text-xl inline-flex truncate font-bold uppercase' >{todo.val}</span>
            <div>
              <button  onClick={() => {props.handleEdit(todo)}}  className='border-2  bg-blue-500 border-blue-500 hover:border-blue-700
              hover:bg-blue-700 py-1 px-2 ml-2 rounded-xl text-white'>✏️</button> 
              <button  onClick={() => {props.handleDelete(todo)}}  className='border-2  bg-blue-500 border-blue-500 hover:border-blue-700
              hover:bg-blue-700 py-1 px-2 ml-2 rounded-xl text-white'>❌</button>        
            </div>
          </div>
        )
      })}
    
    </>
  )
}

export default TodoListComponent;