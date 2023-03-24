import {  useState, useEffect, useCallback, useMemo } from "react"

import { Grid  } from "@mui/material"

import {tasksApi} from "@/apis"
import { Layout, TaskCard } from "@/components"

export default function HomePage() {
 
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        getTasks()
    }, []);
    
    const getTasks = async ()  => {
        const {data} = await tasksApi.get('/tasks')
        setTasks(data.tasks)
        console.log(tasks);
    }
    
    return (
    <>
    <Layout title='tasks'>
        <Grid container>
            {
                tasks.map((task) => (
                    <Grid item key={task.id} xs={12} sm={6} md={4}>
                        <TaskCard task={task} setTasks={setTasks} tasks={tasks} />
                    </Grid>
                ))
            }
        </Grid>
    </Layout>
    </>
    )
}