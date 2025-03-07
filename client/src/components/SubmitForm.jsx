import axios from "axios";
import React, { useState } from "react";

// Component for submitting new tasks
function SubmitForm({ setTodos, todos }) {
  // State for managing the input task
  const [todo, setTodo] = useState({
    task: "",
  });

  // Handle input submission when Enter key is pressed
  function handleInputKeyDown(e) {
    if (e.key === "Enter") {
      addNewTodo();
    }
  }

  // Update state on input change
  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  // Add new task to database and state
  const addNewTodo = async () => {
    if (todo.task.trim() !== "") {
      const newTaskInfo = {
        task: todo.task.trim(),
      };
      try {
        const res = await axios.post("http://localhost:8080/create", newTaskInfo);
        console.log(res.data);
        setTodos([...todos, res.data.createTask]);
        setTodo({ task: "" });
      } catch (error) {
        console.log(error);
      }
    } else {
      // Clear input if task is empty or whitespace
      setTodo({ task: "" });
    }
  };

  // Render input field and submit button
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Add a task..."
        id="input"
        onChange={handleInputChange}
        value={todo.task}
        onKeyDown={(e) => handleInputKeyDown(e)}
      />
      <button onClick={addNewTodo} className="btn button add-btn px-1 py-0 mx-2">
        Add
      </button>
    </div>
  );
}

export default SubmitForm;
// 🦖
