import React, { useState, useEffect } from 'react';

// import { getAllTasks } from '../services';

export const TaskList = () => {
  
  const [tasks, setTasks] = useState();

  useEffect(() => {
    taskList()
  }, []);

  const taskList = async () => {
    
    const data = await getAllTasks()
    setTasks(data)
    console.log(data);

  }
  
  return (
    <>
    <div>TaskList</div>
    <div>{JSON.stringify(tasks.tareas)}</div>
    </>
  )
}