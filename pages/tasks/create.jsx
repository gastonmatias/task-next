import { tasksApi } from "@/apis"
import { Layout, TaskForm } from "@/components"

export default function CreateTaskPage({ tasks }) {

    return (
        <>
        <Layout title='tasks'>
        <TaskForm/>
        
        
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