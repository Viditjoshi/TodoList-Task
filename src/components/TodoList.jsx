// src/components/TodoList.js

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../slices/todoSlice";
import toast from 'react-hot-toast';

const TodoList = () => {
  // Accessing the todos from the Redux store using `useSelector`
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch(); // Using `useDispatch` to dispatch actions to the Redux store
  const [newTodo, setNewTodo] = useState(""); // Local state for handling new todo input

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === "") {
      toast.error("Please Enter Value")
      return;
    }; // Prevent adding empty todos
    dispatch(addTodo({ title: newTodo })); // Dispatch the `addTodo` action with the new todo title
    setNewTodo(""); // Clear the input field after adding the todo
  };

  return (
    <div className="w-full flex justify-center pt-10 px-4 sm:px-0">
      {/* Container for the Todo App */}
      <div className="bg-white flex flex-col w-full max-w-[25rem] p-5 rounded-lg gap-3 shadow-lg overflow-auto">

        {/* Title of the Todo App */}
        <div className="text-gray-700">
          <h1 className="font-bold text-2xl">To-Do List</h1>
        </div>

        {/* Input field and Add Button for new todos */}
        <div className="flex gap-4 justify-between items-center">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // Update local state with input value
            placeholder="Add a new todo"
            className="p-2 pl-5 w-full text-sm border-none rounded-2xl outline-none bg-slate-300"
          />
          {/* Button to add a new todo */}
          <button
            className="bg-orange-500 text-white rounded-2xl p-2 w-auto sm:w-24"
            onClick={handleAddTodo} // Calls the function to add a new todo
          >
            Add
          </button>
        </div>

        {/* List of Todos */}
        <div className="flex justify-start p-2 pt-5 overflow-auto">
          <ul className="flex flex-col gap-3 w-full">
            {/* Mapping over the todos from Redux state to render each todo */}
            {todos.map((todo) => (
              <li
                key={todo.id} // Each todo needs a unique key
                className="flex justify-between gap-3 items-center min-w-0"
              >
                {/* Todo item with checkbox and title */}
                <div className="flex items-center gap-3 min-w-0 w-full">
                  {/* Checkbox to mark todo as completed or not */}
                  <input
                    type="checkbox"
                    checked={todo.completed} // Checkbox state based on `completed` status
                    onChange={() => dispatch(toggleTodo(todo.id))} // Dispatches toggle action to update todo's completed status
                  />
                  {/* Todo title with line-through styling if completed */}
                  <p
                    className={`text-sm break-words pr-10 ${todo.completed ? "line-through" : ""
                      } w-full`}
                  >
                    {todo.title}
                  </p>
                </div>
                {/* Displaying whether the todo is completed or pending */}
                <span
                  className={`${todo.completed ? "text-green-700" : "text-red-700"
                    }`}
                >
                  {todo.completed ? "completed" : "pending"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
