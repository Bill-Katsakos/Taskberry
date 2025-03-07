import axios from "axios";
import { useState, useRef } from "react";

// Component to render individual todo items with edit and delete functionality
function TodoItem({ getAllTodos, setTodos, todos }) {
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const editRef = useRef(null);

  // Delete a task
  async function deleteTodo(id) {
    const userDeletion = window.confirm("Are you sure you want to delete this task? 🤔");
    try {
      if (userDeletion) {
        await axios.delete(`http://localhost:8080/delete/${id}`);
        getAllTodos();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Set the task into edit mode
  function updateTodo(id, currentText) {
    setEditableTodoId(id);
    setEditedText(currentText);

    setTimeout(() => {
      editRef.current.focus();
    }, 0);
  }

  // Update state with input changes
  function handleInput(e) {
    setEditedText(e.currentTarget.textContent);
  }

  // Save changes on blur (losing focus)
  async function handleBlur(id) {
    try {
      const res = await axios.put(`http://localhost:8080/update/${id}`, { task: editedText });
      console.log(res.data);
      getAllTodos();
      setEditableTodoId(null);
    } catch (error) {
      console.log(error);
    }
  }

  // Handle keydown events for editable task input
  function handleEditKeyDown(e, id) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleBlur(id);
    }
  }

  // Toggle completion status of the task
  async function toggleStatus(e, id) {
    const isChecked = e.target.checked;

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo._id === id ? { ...todo, completed: isChecked } : todo))
    );

    try {
      await axios.put(`http://localhost:8080/update/${id}`, { completed: isChecked });
      getAllTodos();
    } catch (error) {
      console.log(error);
    }
  }

  // Render the todo items in table rows
  return (
    <>
      {todos.map((todo, index) => (
        <tr key={todo._id}>
          <th scope="row" className="todo-tasks col-1 align-middle borderTaskRight">
            {index + 1}
          </th>

          <td className="todo-tasks text-start col-8 align-middle borderTaskRight">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleStatus(e, todo._id)}
              className="todo-checkbox mx-1 align-middle"
            />
            <span
              ref={editableTodoId === todo._id ? editRef : null}
              contentEditable={editableTodoId === todo._id}
              suppressContentEditableWarning={true}
              onInput={handleInput}
              onBlur={() => handleBlur(todo._id)}
              onKeyDown={(e) => handleEditKeyDown(e, todo._id)}
              className={todo.completed ? "text strikeThrough py-1" : "text py-1"}
            >
              {todo.task}
            </span>
          </td>

          <td className="todo-tasks col-3 py-1 align-middle">
            <button
              onClick={() => deleteTodo(todo._id)}
              className="btn button px-1 py-0 me-2 mb-1"
            >
              <i className="material-icons">Delete</i>
            </button>
            <button onClick={() => updateTodo(todo._id, todo.task)} className="btn button px-1 py-0">
              <i className="material-icons">Edit</i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TodoItem;
// 🦖
