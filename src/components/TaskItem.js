import React from "react";
import { observer } from "mobx-react";

const TaskItem = ({ task }) => {
  return (
    <ul className="list-group">
      <div>
        <li className="list-group-item d-flex align-items-center">
          <div className="col"> {task.task}</div>
        </li>
      </div>
    </ul>
  );
};

export default observer(TaskItem);
