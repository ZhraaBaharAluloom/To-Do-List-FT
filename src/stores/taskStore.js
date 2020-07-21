import { observable, decorate } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  createTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/", newTask);
      this.tasks.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/");
      this.tasks = res.data;
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
