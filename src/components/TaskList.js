import React from "react";
import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = taskStore.tasks
    .filter((task) => task.todo)
    .map((task) => <TaskItem task={task} taskId={task.id} />);

  const doneTasksList = taskStore.tasks
    .filter((task) => !task.todo)
    .map((task) => <TaskItem task={task} taskId={task.id} />);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h3>To Do List</h3>
          {taskList.length === 0 ? "Find things to Do" : taskList}
        </div>
        <div className="col-12 col-lg-6">
          <h3>Done List</h3>
          {doneTasksList.length === 0 ? "Get Things Done !!!" : doneTasksList}
        </div>
      </div>
    </div>
  );
};

export default observer(TaskList);
