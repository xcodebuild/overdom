const tasks: Set<Function> = new Set();
let timer: NodeJS.Timeout | number | null = null;

export function schedule(task: Function) {
  tasks.add(task);
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      const taskItems = Array.from(tasks.values());
      tasks.clear();
      taskItems.forEach(taskItem => {
        taskItem();
      });
    }, 0);
  }
}
