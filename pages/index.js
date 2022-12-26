import Head from "next/head";
import styles from "../styles/Home.module.css"
import { useState } from "react";
import axios from "axios"

export default function Home() {
  const [todos, settodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get("/api/todo");
    // const data = await response.json();
    console.log(response)
    settodos(response.data);
  };

  return (
    <div className={styles.container}>
      <main>
        <button onClick={fetchTodos}>Get todos</button>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                style={{ color: `${todo.completed ? "green" : "red"}` }}
                key={todo.id}
              >
                {todo.todo}:{todo.completed}.
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}