import React, { useEffect, useRef } from 'react'
import {useState} from 'react'
import "./input.css"
import { Todo } from '../modal';
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import {IoMdCloudDone} from 'react-icons/io'

interface Props{
    todo:Todo;
    todoList:Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const SingleTodo:React.FC<Props> = ({todo,todoList, setTodoList}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
  
    const handleDelete=(id:number)=>{
        setTodoList(todoList.filter((todo)=> todo.id !==id))

    }

    const handleComplete=(id:number)=>{
        setTodoList(todoList.map((todo)=> todo.id===id?{...todo,isComplete:!todo.isComplete}:todo))

    }

    const handleEdit = (e:React.FormEvent, id:Number)=>{
        e.preventDefault();
        setTodoList(todoList.map((todo)=>(
            todo.id===id?{...todo,todo:editTodo}:todo)))
            setEdit(false)

    }

    const inputRef =useRef<HTMLInputElement>(null);
    useEffect(()=>{
        inputRef.current?.focus();
    }, [edit])

  return (
    <form  className='todo__single' onSubmit={(e)=>handleEdit(e, todo.id)}>
        {
            edit ?(
                <input value={editTodo}onChange={(e)=>{setEditTodo(e.target.value)}} className="test__edit" ref={inputRef}/>

            ):todo.isComplete ?(
                
<s className="todos__single--text">{todo.todo}</s>
        ):(
            <span className="todos__single--text">{todo.todo}</span>
        )}
        <div className='icons'>
            <span className="icon"onClick={()=>{if(!edit && !todo.isComplete){ 
            setEdit(!edit)}}}><AiFillEdit/></span>
            <span className="icon"onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
            <span className="icon" onClick={()=>handleComplete(todo.id)}><IoMdCloudDone/></span>
        </div>

    </form>
  )
}

export default SingleTodo