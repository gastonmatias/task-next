const { tasksApi } = require("@/apis")
const { setTasks, startLoading, createTask, deleteTask, updateTask } = require("./taskSlice")


export const startLoadingTasks = () => {
    return async(dispatch, getState) => {
        dispatch(startLoading())
        
        const {data} = await tasksApi.get('/tasks')
        dispatch(setTasks(data.tasks))
    }
}

export const startCreateTask = (task) => {
    return async (dispatch) => {
        
        dispatch(startLoading())
        const {data:newTask} = await tasksApi.post(`/tasks`,{task})
        console.log(newTask);
        
        dispatch(createTask(newTask))
    }
}

export const startUpdateTask = (id, title, description) => {
    return async (dispatch, getState) => {
        
        const {data:taskUpdated} = await tasksApi.put(`/tasks/${id}`,{title, description})
        console.log(taskUpdated);
        dispatch(updateTask(taskUpdated))
    }
}

export const startDeleteTask = (id) => {
    return async (dispatch, getState) => {
        
        dispatch(startLoading())
        const deletedTask = await tasksApi.delete(`/tasks/${id}`)
        dispatch(deleteTask(id))
    }
}