import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo)=>todo.done).length
    const totalTodos = todos.length

  return (

    // Lifting State Up:- TAking the common state b/w two component and kind of moving it up inside a parent called lifting State Up.... 
    <div>
      <Form todos={todos} setTodos = {setTodos}/>
      <TodoList todos = {todos} setTodos={setTodos}/>
      <Footer completedTodos ={completedTodos} totalTodos = {totalTodos}/>
    </div>
  );
}
