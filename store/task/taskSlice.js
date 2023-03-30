import { createSlice } from "@reduxjs/toolkit"

export const taskSlice = createSlice({
    name:'task',
    initialState:{
        isLoading: false,
        tasks: []
    },
    reducers:{
        setTasks:(state,action) =>{
            state.tasks = action.payload
            state.isLoading = false
        },
        
        createTask:(state,action) =>{
            state.tasks.push(action.payload)
            state.isLoading = false
        },
        
        deleteTask:(state,{payload}) =>{
            
            state.tasks = state.tasks.filter( item =>
                item.id !== payload.id 
            )

            state.isLoading = false
        },
        
        updateTask:(state,{payload}) =>{
            
            state.tasks = state.tasks.map( item =>
                item.id === payload.id
                ? payload
                : item
            )

            state.isLoading = false
        },
        
        startLoading: (state,action) => {
            state.isLoading = true
        }
    }
})

export const {
    startLoading,
    setTasks,
    createTask,
    deleteTask,
    updateTask
} = taskSlice.actions