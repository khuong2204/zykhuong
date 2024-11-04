import React, { useEffect, useState } from 'react';
import './App.css'
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

// const todolist = [{ name: "Sleep", checked: true }, { name: "Eat", checked: false }, { name: "Code", checked: false }, { name: "Sleep", checked: true }];

function App(props) {
  console.log('App');
  // const todo = "Be happy!";

  // hook
  const [todoList, setTodoList] = useState(() => {
    const data = JSON.parse(localStorage.getItem('todolist'));
    return data;
  })

  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodoList(json))
  }, []);

  useEffect(() => {
    console.log('effect 2');
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

  // localStorage.setItem("todolist", JSON.stringify(todoList));

  const addTodo = (text) => {
    // Aynchronous programming
    setTodoList([...todoList, { name: text, checked: false }])
    // localStorage.setItem("todolist", JSON.stringify(todoList))
  }

  const toggleCheck = (index) => {
    console.log(index);
    const tmp = [...todoList]
    tmp[index].checked = !tmp[index].checked;
    setTodoList(tmp);
    // localStorage.setItem("todolist", JSON.stringify(todoList))
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList data={todoList} toggleCheck={toggleCheck} />
    </div>
  );
}

export default App;
