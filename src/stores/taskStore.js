import { observable, decorate } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

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
