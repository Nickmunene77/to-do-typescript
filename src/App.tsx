import React, { useState } from 'react';
import { Todo } from './modal';

import './App.css';
import InputField from './componenets/InputField';
import TodoL from './componenets/TodoL';
//let name:string = "Mark"
//let hobbies: string[]
//let person:

const App:React.FC =() =>{
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleTask =(e:React.FormEvent)=>{
   e.preventDefault();
   if(todo){ 
   setTodoList([...todoList,{id: Date.now(),todo:todo,isComplete:false}]);
   setTodo('');
   console.log(todoList)
  }
}
  return (
    <div className="App">
      <span className='heading'>My to do list</span>
      <InputField todo={todo} setTodo={setTodo} handleTask={handleTask}/>
      <TodoL todoList={todoList} setTodoList={setTodoList}/>
      
  
    </div>
  );
}

export default App;
