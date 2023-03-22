import {tasksApi} from "@/apis"
import { Layout, TaskCard } from "@/components"
import { Grid  } from "@mui/material"

export default function HomePage({ tasks }) {

    return (
    <>
    <Layout title='tasks'>
    <Grid container>
        {
            tasks.map((task) => (
                <Grid item xs={12} sm={6} md={4}>
                    <TaskCard key={task.id} task={task} />
                </Grid>
            ))
        }
    </Grid>
    </Layout>
    </>
    )
}

export const getServerSideProps = async (ctx) => {
    
    const {data} = await tasksApi.get('/tasks')
    
    const tasks = data.tasks
    
    return {
        props: {
            tasks
        }
    }
}