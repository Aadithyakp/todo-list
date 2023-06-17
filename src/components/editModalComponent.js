import React, { useEffect } from 'react'
import { useState } from 'react';
export default function EditModalComponent(props)
{
  
  const [inputValue,setInputValue] = useState('');
  const [todo,setTodo] = useState({});
  useEffect(()=>{
    setInputValue(props.todo.val)
    setTodo(props.todo);
  },[props.todo])
  
  
  const handleChange=(e)=>{
    setInputValue(e.target.value);
}
  return (
    <>
    {(props.isModalOpen)?(
        <>
          <div
            className="w-full h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Todo
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                
                <form onSubmit={(e)=>{props.updateTodo(e,inputValue)}}>
                <div className="relative p-6 flex-auto">
                  {console.log(props.todo.val)}
                  <input type="text" onChange={handleChange} value={props.todo.val}   className='border-2 rounded-xl border-blue-500 focus:rounded-xl py-1 px-2 focus:outline-0'/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={()=>{props.setIsModalOpen(false)}}
                    
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    
                  >
                    Save Changes
                  </button>
                </div>
              </form>  
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ):null}
    </>
  )
}
