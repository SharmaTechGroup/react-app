import TaskSlicer  from "../slicers/task-slicer"
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: TaskSlicer
})