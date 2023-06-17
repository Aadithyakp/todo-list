import './App.css';
import InputComponent from './components/inputComponent';
import TodoListComponent from './components/todoListComponent';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid'
import EditModalComponent from './components/editModalComponent';

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue,
  )

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

function App() {
  const[inputValue,setInputValue] = useState('');
  const[todos,setTodos] = useLocalStorageState('todos',[]);  
  const[isModalOpen,setIsModalOpen] = useState(false);
  const[editTodo, setEditTodo] = useState('');
    const handleChange=(e)=>{
        e.preventDefault();
        setInputValue(e.target.value);
    }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodos([...todos,{id:uuid(),val:inputValue, done:false}]);
    setInputValue('');
  }
  const handleDelete = (todoElement) => {
   setTodos(todos.filter((todo) => todo.id !== todoElement.id))
   console.log(todos);
  }
  const handleEdit = (todo) =>{
    setIsModalOpen(true);
    setEditTodo(todo);
  }
  const updateTodo =(e,todoText) =>{
    e.preventDefault();
    const newTodos = [...todos];
    const t = newTodos.find(t=>t.id === editTodo.id)
    t.val = todoText;
    setTodos(newTodos);
    setEditTodo({});
    setIsModalOpen(false);
  }
  
  return (
    <div className="App">
      <InputComponent handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue}/>
      <EditModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} editTodoId={editTodo} updateTodo={updateTodo} todo={todos} handleChange={handleChange}/>
      <TodoListComponent todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
