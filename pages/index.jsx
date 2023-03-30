import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Box, Grid  } from "@mui/material"

import { Layout, TaskCard } from "@/components"
import { startLoadingTasks } from "@/store"

export default function HomePage() {
    
    const {tasks, isLoading} = useSelector(state => state.task)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startLoadingTasks())
    }, []);
    // }, [tasks.lenght]);
    
    // useEffect(() => {
        
    // }, [tasks]);

    // console.log(isLoading);
    console.log(tasks);

    return (
    <>
    <Layout title='tasks'>
        {
            isLoading && 
            <Box 
            sx={{
                display: "flex",
                alignItems:'center',
                justifyContent:'center',
                height:'90vh',
                width:"90vw",
            }}>
                ...L o a d i n g (Spinner soon)
            </Box>
        }
        {
            !isLoading &&
        <Grid container>
            {
                tasks.map((task) => (
                    <Grid item key={task.id} xs={12} sm={6} md={4}>
                        <TaskCard task={task} tasks={tasks} />
                    </Grid>
                ))
            }
        </Grid>
        }
    </Layout>
    </>
    )
}