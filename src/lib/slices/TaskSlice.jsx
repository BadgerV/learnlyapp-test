//imports
import { createSlice } from "@reduxjs/toolkit";

//sets initial state
const initialState = {
  totalTasks: 0,
  totalPending: 0,
  totalCompleted: 0,
  totalUrgent: 0,
  lisOfTasks: [],
  particularTask: {},
  taskToBeDeletedId: -1,

  filteredList: [],
  filterType: "",
  timeCreated: "",
};

//definition of task slice
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //creates task
    createTask: (state, action) => {
      const newtask = { ...action.payload };

      newtask.status = action.payload.status.value;
      newtask.createdAt = Date.now();

      if (state.lisOfTasks.length === 0) {
        newtask.id = 1;
      } else {
        newtask.id = state.lisOfTasks[state.lisOfTasks.length - 1].id + 1;
      }

      if (newtask.status === "pending") {
        state.totalPending++;
      } else if (newtask.status === "completed") {
        state.totalCompleted++;
      } else if (newtask.status === "urgent") {
        state.totalUrgent++;
      }
      state.lisOfTasks.push(newtask);
      state.totalTasks = state.lisOfTasks.length;

      if (state.filterType !== "") {
        state.filteredList = state.lisOfTasks.filter((task) => {
          return task.status === state.filterType;
        });
      }
      //saves listOfTasks in window.localStorage
      window.localStorage.setItem(
        "listOfTasks",
        JSON.stringify(state.lisOfTasks)
      );
    },

    //updates task
    updateTask: (state, action) => {
      const { id } = action.payload;
      const updatedTask = { ...action.payload.formData };

      updatedTask.status = action.payload.formData.status.value;

      // Find the index of the task to update
      const index = state.lisOfTasks.findIndex((task) => task.id === id);

      updatedTask.createdAt = state.lisOfTasks[index].createdAt;

      if (index !== -1) {
        // Update the task, preserving serializable values
        state.lisOfTasks[index] = {
          id: state.lisOfTasks[index].id, // Make sure to keep the original ID
          ...updatedTask,
        };

        // Update the total tasks and respective status counts
        state.totalTasks = state.lisOfTasks.length;
        state.totalPending = state.lisOfTasks.filter(
          (task) => task.status === "pending"
        ).length;
        state.totalCompleted = state.lisOfTasks.filter(
          (task) => task.status === "completed"
        ).length;
        state.totalUrgent = state.lisOfTasks.filter(
          (task) => task.status === "urgent"
        ).length;
      }

      if (state.filterType !== "") {
        state.filteredList = state.lisOfTasks.filter((task) => {
          return task.status === state.filterType;
        });
      }
      //saves listOfTasks in window.localStorage
      window.localStorage.setItem(
        "listOfTasks",
        JSON.stringify(state.lisOfTasks)
      );
    },

    //deletes task
    deleteTask: (state, action) => {
      const idToDelete = action.payload;

      // Filter out the task to delete
      state.lisOfTasks = state.lisOfTasks.filter(
        (task) => task.id !== idToDelete
      );

      // Update the total tasks and respective status counts
      state.totalTasks = state.lisOfTasks.length;
      state.totalPending = state.lisOfTasks.filter(
        (task) => task.status === "pending"
      ).length;
      state.totalCompleted = state.lisOfTasks.filter(
        (task) => task.status === "completed"
      ).length;
      state.totalUrgent = state.lisOfTasks.filter(
        (task) => task.status === "urgent"
      ).length;

      if (state.filterType !== "") {
        state.filteredList = state.lisOfTasks.filter((task) => {
          return task.status === state.filterType;
        });
      }
      //saves listOfTasks in window.localStorage
      window.localStorage.setItem(
        "listOfTasks",
        JSON.stringify(state.lisOfTasks)
      );
    },
    //sets the particular task ID to beb deleted
    setIDToBeDeleted: (state, action) => {
      state.taskToBeDeletedId = action.payload;
    },
    //filters tasks
    filterTasks: (state, action) => {
      state.filterType = action.payload;
      if (action.payload !== "") {
        state.filteredList = state.lisOfTasks.filter((task) => {
          return task.status === action.payload;
        });
      }
    },

    //sets list of tasks at the beginning of application from window.localStorage
    setListOfTasks: (state, action) => {
      state.lisOfTasks = action.payload;

      // Update the total tasks and respective status counts
      state.totalTasks = state.lisOfTasks.length;
      state.totalPending = state.lisOfTasks.filter(
        (task) => task.status === "pending"
      ).length;
      state.totalCompleted = state.lisOfTasks.filter(
        (task) => task.status === "completed"
      ).length;
      state.totalUrgent = state.lisOfTasks.filter(
        (task) => task.status === "urgent"
      ).length;
    },

    setTimeCreated: (state, action) => {
      state.timeCreated = action.payload;

      window.localStorage.setItem("timeCreated", action.payload);
    },
  },
});

export const {
  createTask,
  updateTask,
  setIDToBeDeleted,
  deleteTask,
  filterTasks,
  setListOfTasks,
  setTimeCreated,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
