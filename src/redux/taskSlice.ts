import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define Task interface
interface Task {
  id: number;
  description: string;
  isDone: boolean;
}

// Define initial state interface
interface TaskState {
  tasks: Task[];
  filter: "all" | "done" | "notDone";
}

// Initial state
const initialState: TaskState = {
  tasks: [],
  filter: "all",
};

// Create the task slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (
      state,
      action: PayloadAction<{ id: number; description: string }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.description = action.payload.description;
    },
    setFilter: (state, action: PayloadAction<"all" | "done" | "notDone">) => {
      state.filter = action.payload;
    },
  },
});

// Export the actions
export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;

// ** Correct default export of the reducer **
export default taskSlice.reducer;
