import React from "react";
import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = taskStore.tasks
    .filter((task) => task.status)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const taskListChecked = taskStore.tasks
    .filter((task) => !task.status)
    .map((task) => <TaskItem task={task} key={task.id} />);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h3>To Do List</h3>
          {taskList}
        </div>
        <div className="col-12 col-lg-6">
          <h3>Done List</h3>
          {taskListChecked}
        </div>
      </div>
    </div>
  );
};

export default observer(TaskList);
