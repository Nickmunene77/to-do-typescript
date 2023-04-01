import React from 'react'
import { Todo } from '../modal'
import './input.css'
import SingleTodo from './SingleTodo';
interface Props{
  todoList:Todo[];
  setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoL:React.FC<Props> = ({todoList, setTodoList}) => {
  return (
    <div className='todos'>
      {todoList.map((todo)=>( 
         <SingleTodo todo ={todo} key={todo.id}
         todoList={todoList} setTodoList={setTodoList}
         />
      ))}
    </div>
  )
}

export default TodoL