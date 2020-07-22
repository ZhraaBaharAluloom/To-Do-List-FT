import React from "react";
import { observer } from "mobx-react";
import { DoneButtonStyled } from "../styles";
import taskStore from "../stores/taskStore";
const TaskItem = ({ task }) => {
  return (
    <ul className="list-group">
      <div>
        <li className="list-group-item d-flex align-items-center">
          <div className="col">
            {" "}
            {task.task}
            <DoneButtonStyled onClick={() => taskStore.updateTask(task)}>
              {task.status ? "Done" : "To Do"}
            </DoneButtonStyled>
          </div>
        </li>
      </div>
    </ul>
  );
};

export default observer(TaskItem);
