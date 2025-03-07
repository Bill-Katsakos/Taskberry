// Import necessary components and libraries
import SubmitForm from "./components/SubmitForm";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Main application component
function App() {
  const [todos, setTodos] = useState([]);

  // Fetch all tasks from the database
  async function getAllTodos() {
    try {
      let res = await axios.get("http://localhost:8080/");
      console.log(res.data);
      setTodos(res.data.tasks);
    } catch (error) {
      console.log(error);
    }
  }

  // Retrieve all tasks when component first mounts
  useEffect(() => {
    getAllTodos();
  }, []);

  // Scroll effect for body background
  useEffect(() => {
    // Select the element with class .listBody
    const listBody = document.querySelector(".listBody");

    // Function to update the background position on scroll
    const handleScroll = () => {
      const scrollY = listBody.scrollTop;
      document.body.style.backgroundPosition = `0px ${-scrollY}px`;
    };

    // Attach scroll event listener if listBody element exists
    if (listBody) {
      listBody.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (listBody) {
        listBody.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Render the main application UI
  return (
    <div className="container text-center py-4 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-9 col-xl-10">
          <div className="todo-list card rounded-3">
            <h1 className="title mt-3">Taskberry</h1>
            <div className="card-body p-3 text-center listBody">
              <SubmitForm setTodos={setTodos} todos={todos} />
              <TodoList
                todos={todos}
                setTodos={setTodos}
                getAllTodos={getAllTodos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// 🦖
