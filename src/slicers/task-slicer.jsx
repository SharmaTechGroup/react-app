import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    archivedTasks: [],
    archivedCount: 0
}

const TaskSlicer = createSlice({
     name: "TaskSlicer",
     initialState, 
     reducers: {
         addToArchive: (state, action)=>{
             state.archivedTasks.push(action.payload);
             state.archivedCount = state.archivedTasks.length;
         }
     }
})

export const { addToArchive } = TaskSlicer.actions;
export default TaskSlicer.reducer;