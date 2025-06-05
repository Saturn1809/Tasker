import { nanoid } from 'nanoid';
import React, { useState } from 'react'

const Create = (props) => {

const todos = props.todos;
const settodos = props.settodos;

    

const [title,settitle] = useState("");
const Submiithandler = (e) =>{

 e.preventDefault();

 const newtodo = {

      id: nanoid(),
      title,
      isCompleted: false,
 };

 
//  const copytodos = [...todos];
//  copytodos.push(newtodo)
//  settodos(copytodos)

 settodos([...todos,newtodo])

 settitle("");
 

};




  return (
    <div className='border w-[70%] p-10   rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
       <h1 className='text-5xl font-thin mb-14'>Set <span className='text-blue-700'> Reminders</span> for Tasks</h1>
      <form onSubmit={Submiithandler} >
        <input className='border-blue-300 border-b    focus:outline-none  py-2 w-full text-xl font-thin' onChange={(e)=> settitle(e.target.value)}  value={title} type="text" placeholder='Title' /> <br /><br />
        <button className='cursor-pointer text-blue-400  text-md border-1 p-2 tracking-tight rounded-xl border-blue-300 active:scale-95 transition hover:bg-blue-100'>Create Task</button>
      </form>
    </div>
  )
}

export default Create
