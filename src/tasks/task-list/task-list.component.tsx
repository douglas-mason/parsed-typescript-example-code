import React from 'react';
import { TaskService, Task } from '../../_shared/services/task.service';

const taskService = new TaskService();

const someOtherService = {
  getAll: () => {
    return [] as Task[];
  },
};

export const TaskList = () => {
  const getAllTasks = () => {
    const tasks: Task[] = someOtherService.getAll();
    return tasks.map(task => <li key={task.id}>{task.name}</li>);
  };

  return (
    <div>
      <ul>{getAllTasks()}</ul>
    </div>
  );
};
