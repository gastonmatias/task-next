import tasksApi from "@/apis/tasksApis"

export default function TasksPage({ tasks }) {

    return (
        <>
        <div>
            {JSON.stringify(tasks)}
        </div>
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