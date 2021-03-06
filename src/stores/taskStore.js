import { observable, decorate } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  createTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      this.tasks.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateTask = async (updatedTask) => {
    try {
      await axios.put(
        `http://localhost:8000/tasks/${updatedTask.id}`,
        updatedTask
      );
      const task = this.tasks.find((task) => task.id === updatedTask.id);
      task.todo = !updatedTask.todo;
    } catch (error) {
      console.log(error);
    }
  };

  fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/tasks");
      this.tasks = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      this.tasks = this.tasks.filter((task) => task.id !== +taskId);
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(TaskStore, {
  tasks: observable,
});

const taskStore = new TaskStore();
taskStore.fetchTasks();
export default taskStore;
