import * as React from 'react';
import { useState, useEffect } from "react";


import styles from "../styles/Home.module.css";

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
// import ListItemText from '@mui/material/ListItemText';

import { useSelector, useDispatch } from 'react-redux';
import { selectList, listDataSliceAsync, clearTodos } from "./listDataSlice/listDataSlice.js"


export default function Home() {
  // const [todos, settodos] = useState([]);
  const [loading, setLoading] = useState(false)
  // const fetchTodos = async () => {
  //   const response = await axios.get("/api/todo");
  //   // const data = await response.json();
  //   console.log(response)
  //   settodos(response.data);
  // };

  const list = useSelector(selectList);
  const dispatch = useDispatch();
  useEffect(() => {
    list.status == "success" && setLoading(false);
    list.status == "idle" && setLoading(false);
  }, [list.status])

  return (
    <div className={styles.container}>
      {loading ? <CircularProgress /> :
        <main>
          <Button variant="outlined" disabled={list.status == "success"} onClick={() => {
            dispatch(listDataSliceAsync());
            setLoading(true);
          }
          }>Get todos</Button>
          <Button variant="outlined" disabled={list.status == "idle"} onClick={() => {
            dispatch(clearTodos())
          }
          }>Clear todos</Button>

          <List>
            {[...list.data].map((listItem) => {
              return (
                <ListItem
                  style={{ color: `${listItem.completed ? "green" : "red"}` }}
                  key={listItem.id}
                >
                  <Chip label={`${listItem.todo} : ${listItem.completed}`} variant="outlined" />
                  {/* <ListItemText primary={`${todo.todo} : ${todo.completed}`}/>
                {todo.todo}:{todo.completed}. */}
                </ListItem >
              );
            })}
          </List>
        </main>
      }
    </div>
  );
}