import React, { useState } from "react";
import TaskList from "./components/TaskList";
import taskStore from "./stores/taskStore";
import { AddButtonStyled } from "./styles";

function App() {
  const [task, setTask] = useState({ task: "" });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    taskStore.createTask(task);
  };

  return (
    <div className="container">
      <AddButtonStyled>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-4">
              <input
                required
                name="task"
                onChange={handleChange}
                type="text"
                class="form-control"
                placeholder="New Task.."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              +
            </button>
          </div>
        </form>{" "}
      </AddButtonStyled>
      <TaskList />
    </div>
  );
}

export default App;
