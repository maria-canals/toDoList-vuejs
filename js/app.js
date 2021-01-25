import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

const app = Vue.createApp({
  data() {
    return {
      items: [],
      currentItem: "",
      isClearButtonAvailable: false,
    };
  },
  methods: {
    getItemById(id) {
      return this.items.find((item) => {
        return item.id == id;
      });
    },
    addItem() {
      this.items.push({
        id: nanoid(),
        task: this.currentItem,
        isCompleted: false,
        editMode: false,
        editingTaskText: this.currentItem,
      });
      this.currentItem = "";
    },
    completedTask(id) {
      let item = this.getItemById(id);
      item.isCompleted = true;
      item.done = !item.done;
    },
    deleteTask(id) {
      this.items = this.items.filter((item) => item.id != id);
    },
    clearTasks() {
      this.items = this.items.filter((item) => !item.done);
    },
    editTask(id) {
      let item = this.getItemById(id);
      item.editMode = true;
    },
    taskEdited(id) {
      let item = this.getItemById(id);
      item.task = item.editingTaskText;
      item.editMode = false;
    },
  },
  computed: {
    isArrayEmpty() {
      return this.items.length == 0;
    },
  },
});

app.mount("#app");
