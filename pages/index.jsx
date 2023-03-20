import {tasksApi} from "@/apis"
import { Layout } from "@/components"

export default function HomePage({ tasks }) {

    return (
        <>
        <Layout title='tasks'>
        <div>
            {JSON.stringify(tasks)}
        </div>
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