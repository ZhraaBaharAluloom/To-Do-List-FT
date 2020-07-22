import React from "react";
import { observer } from "mobx-react";
import { DoneButtonStyled, DeleteButtonStyled } from "../styles";
import taskStore from "../stores/taskStore";
const TaskItem = ({ task, taskId }) => {
  return (
    <ul className="list-group">
      <div>
        <li className="list-group-item d-flex align-items-center">
          <div className="col">
            {task.task}

            <DeleteButtonStyled onClick={() => taskStore.deleteTask(taskId)}>
              X
            </DeleteButtonStyled>

            {task.todo ? (
              <DoneButtonStyled onClick={() => taskStore.updateTask(task)}>
                Done
              </DoneButtonStyled>
            ) : (
              ""
            )}
          </div>
        </li>
      </div>
    </ul>
  );
};

export default observer(TaskItem);
