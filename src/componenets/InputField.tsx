import React from 'react'
import './input.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleTask: (e:React.FormEvent)=> void;
}

const InputField = ({todo,setTodo, handleTask}:Props) => {
  return (
    <form className='inputs' onSubmit={handleTask}>
        <input type='text' placeholder='Enter a todo' className='input__box' value={todo} onChange={(e)=>{ setTodo(e.target.value)}}></input>
        <button className='input__submit'>GO</button>
    </form>
    
  )
}

export default InputField