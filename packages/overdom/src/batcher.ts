const tasks: Set<Function> = new Set();
const deferTasks: Set<Function> = new Set();

let timer: NodeJS.Timeout | number | null = null;

export function schedule(task: Function, defer = false) {
  if (defer) {
    deferTasks.add(task);
  } else {
    tasks.add(task);
  }
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      const taskItems = Array.from(tasks.values());
      tasks.clear();
      const deferItems = Array.from(deferTasks.values());
      deferTasks.clear();
      taskItems.concat(deferItems).forEach(taskItem => {
        taskItem();
      });
    }, 0);
  }
}
