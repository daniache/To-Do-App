import React, { useState } from 'react'
import green_tick from '../assets/green_tick.jpg'
import delete_icon from '../assets/delete_icon.svg'
import not_tick from '../assets/not_tick.png';
import edit_icon from '../assets/edit_icon.png'

const Todoitems = ({text, id, isComplete, handleDelTask, toggleCheckFunction, editTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() !== ""){
      editTask(id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img 
                onClick={()=>{toggleCheckFunction(id)}}
                src={isComplete ? green_tick : not_tick} alt="" className='w-7'
            />

            {isEditing ? (
              <input
              className='ml-4 border rounded px-2 py-1 text-sm w-full'
              value={editText}
              onChange={(e)=> setEditText(e.target.value)}
              onKeyDown={(e)=> e.key === "Enter" && handleSave}
              />
            ) : (
            <p className={`ml-4 text-[17px] text-slate-700 ${isComplete ? 'line-through' : ''}`}>
            {text}</p> 
            )}
        </div>

  {/* ------ edit & delete button------------------- */}
    {isEditing ? (
        <button onClick={handleSave} className='text-sm text-green-600 font-semibold'>Save</button>
      ) : (
        <>
          <img onClick={handleEdit} src={edit_icon} alt="Edit" className='w-4 cursor-pointer' />
          <img onClick={()=>{handleDelTask(id)}} src={delete_icon}  alt='' className='w-4 cursor-pointer'/>
        </>
      )}
    </div>
  );
};

export default Todoitems
