import { useEffect, useRef, useState } from 'react';
import list_todo from '../assets/list_todo.svg';
import Todoitems from './Todoitems';

const Todo = () => {

const [todoList, setTodoList ] = useState([]);

const taskInputRef = useRef();

const handleAddTask =()=>{
    const inputText = taskInputRef.current.value.trim();

    if(inputText === "") {
        return null;
    }
    
    const newTodo = {
        id:Date.now(),
        text: inputText,
        isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    taskInputRef.current.value = "";
    
}

const handleDelTask = (id)=>{
    setTodoList((prvTodos)=>{
        return prvTodos.filter((todo) => todo.id !== id)
    })
}

const toggleCheckFunction = (id)=>{
    setTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
}

const editTask = (id, newText ) => {
    setTodoList((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id ? {...todo, text: newText } : todo
        )
    );
};

useEffect(()=>{
    console.log(todoList);
},[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-8 min-h-[550px] rounded-3xl'>
        
{/* ------ title ------------------- */}        
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={list_todo} alt='' />
            <h1 className='text-3xl font-semibold'> To-Do List</h1>
        </div>

{/* ------ input inbox ------------------- */}
    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={taskInputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
        <button onClick={handleAddTask} className='border-none rounded-full bg-green-600 hover:bg-green-700 transition w-32 h-14 text-white  text-lg font-medium cursor-pointer'> ADD +</button>
    </div>

    <div>
        {todoList.length === 0 && (
          <p className="text-center text-slate-500 mt-10">No tasks yet. Start by adding one above!</p>
        )}
    </div>

{/* ------ todo list------------------- */}
     <div>
        {todoList.map ((item, index)=>{
            return <Todoitems key={index} text={item.text} id={item.id} 
            isComplete={item.isComplete} handleDelTask={handleDelTask} toggleCheckFunction={toggleCheckFunction} editTask={editTask}/> 
        })}
      
     </div>
    
    
    </div>

 
  )
}

export default Todo
