import TodoItem from "./TodoItem";

// Component to render the list of todo items in a table format
function TodoList({ setTodos, todos, getAllTodos }) {
  return (
    <>
      <table className="text-center table mb-0">
        <thead>
          <tr>
            <th scope="col" className="todo-tasks-title borderTaskRight">
              #
            </th>
            <th scope="col" className="todo-tasks-title borderTaskRight">
              Tasks
            </th>
            <th scope="col" className="todo-tasks-title">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <TodoItem
            todos={todos}
            setTodos={setTodos}
            getAllTodos={getAllTodos}
          />
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
// 🦖
