import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, {useState} from 'react';
import AddTodo from './MyComponents/AddTodo';


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === "null"){
    initTodo = [];

  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e)=> {
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
  } else {
      sno = todos[todos.length - 1].sno + 1;
  }
    const myTodo = {
      sno: sno,
      title: title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] =  useState(initTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
  
  return (
    <>
    <Header title = "My Todos List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
