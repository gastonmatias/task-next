const { configureStore } = require("@reduxjs/toolkit");
import { taskSlice } from "./task/taskSlice";

export const store = configureStore({
    reducer:{
        task: taskSlice.reducer
    }
})