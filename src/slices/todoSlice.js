// src/slices/todoSlice.js

// Importing the `createSlice` function from Redux Toolkit to simplify reducer creation
import { createSlice } from "@reduxjs/toolkit";

// Initial state containing some example todos, each with an id, title, and completed status
const initialTodos = [
  { id: 1, title: "Change background of project", completed: false },
  { id: 2, title: "Make header of the website", completed: true },
];

// Creating the `todoSlice` using `createSlice`, which automatically generates action creators and action types
const todoSlice = createSlice({
  name: "todos", // Slice name used for action types
  initialState: initialTodos, // Initial state for the todos
  reducers: {
    // Reducer to add a new todo item to the beginning of the state array
    addTodo: (state, action) => {
      state.unshift({
        id: state.length + 1, // Unique ID based on the current number of todos
        title: action.payload.title, // Title provided from the dispatched action
        description: action.payload.description, // Description provided from the dispatched action (optional)
        completed: false, // New todos are incomplete by default
      });
    },
    // Reducer to toggle the completed status of a todo based on its ID
    toggleTodo: (state, action) => {
      // Find the todo by its ID from the action payload
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        // Flip the `completed` status if the todo is found
        todo.completed = !todo.completed;
      }
    },
  },
});

// Exporting the generated action creators for adding and toggling todos
export const { addTodo, toggleTodo } = todoSlice.actions;

// Exporting the reducer to be used in the Redux store
export default todoSlice.reducer;
