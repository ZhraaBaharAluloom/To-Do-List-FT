import React from "react";
import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = taskStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));

  return (
    <div>
      <h3>To Do List</h3>
      {taskList}
    </div>
  );
};

export default observer(TaskList);
