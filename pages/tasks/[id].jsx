import { tasksApi } from "@/apis"
import { Layout, TaskForm } from "@/components"

const UpdateTaskPage = ({task}) => {
  
    const {title, description} = task

  
    return (
    <>
    <Layout title={'update task'}>
    <div>
        <TaskForm  
            title={title} 
            description={description} 
            formType='Edit Task'
        />
    </div>
    </Layout>
    </>
  )
}
export default UpdateTaskPage

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {

    const {id} = ctx.params

    try {
        const { data } = await tasksApi.get(`/tasks/${id}`)
        
        return {
            props: {
                task: data.task
            }
        }
    
    } catch (err) {
        return {
          redirect:{
            destination:'/404',
            permanent: false
          }
        }
    }
}