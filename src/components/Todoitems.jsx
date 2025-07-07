import React from 'react'
import green_tick from '../assets/green_tick.jpg'
import delete_icon from '../assets/delete_icon.svg'
import not_tick from '../assets/not_tick.png';


const Todoitems = ({text, id, isComplete, delTodo, toggleCheckFunction}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggleCheckFunction(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? green_tick : not_tick} alt="" className='w-7'/>
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p> 
        </div>

    <img onClick={()=>{delTodo(id)}} src={delete_icon}  alt='' className='w-4 cursor-pointer'/>
    </div>
  )
}

export default Todoitems
