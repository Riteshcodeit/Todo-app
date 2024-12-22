import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]); //it set in async
    setTodo({name:"",done:false});
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          type="text"
          value={todo.name}
          placeholder="Enter Todo Item...."
        />
        <button className={styles.modernbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
