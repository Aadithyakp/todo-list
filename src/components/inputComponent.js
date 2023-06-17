

function InputComponent(props) {

  return (
    <>
    
      <form className="w-full mt-20 m-auto" onSubmit={props.handleSubmit}>
        <input type="text" value={props.inputValue} onChange={props.handleChange} placeholder='Add Todo' className='border-2 rounded-l-xl border-blue-500 focus:rounded-l-xl py-1 px-2 focus:outline-0 font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'  />
        <button  type="submit" className='border-2 bg-blue-500 border-blue-500 hover:border-blue-700 font-bold uppercase
        hover:bg-blue-700 py-1 px-2 rounded-r-xl text-white'>Add</button> 
        {console.log(props.inputValue)}
      </form>
    </>
  )
}

export default InputComponent