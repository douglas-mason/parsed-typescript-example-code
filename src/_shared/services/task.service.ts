import { string } from 'prop-types';
import moment, { Moment } from 'moment';
import axios from 'axios';

type TaskStatuses = 'pending' | 'done' | 'overdue';

export interface WorkFlowable {
  status?: TaskStatuses;
}

export interface Task {
  id: string;
  name: string;
  assigned: string;
  dueDate: Moment;
}

const TASK_STORAGE_KEY = 'tasks';
const initialTaskValue: Task[] = [];

export class TaskService {
  constructor() {
    this.initializeTasks();
  }

  initializeTasks() {
    const tasks = localStorage.getItem(TASK_STORAGE_KEY);
    if (!tasks || !tasks.length) {
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(initialTaskValue));
    }
  }

  getAll() {
    const tasks = localStorage.getItem(TASK_STORAGE_KEY);
    if (tasks) {
      return JSON.parse(tasks) as Task[];
    }
    return [];
  }

  save(task: Task) {
    const tasks = this.getAll();
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify([...tasks, task]));
  }

  remove(taskIndex: number) {
    const tasks = this.getAll();
    tasks.splice(taskIndex, 1);
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
  }

  removeAll() {
    localStorage.setItem(TASK_STORAGE_KEY, '');
    this.initializeTasks();
  }
}

/*
name
bd
gender
accountNumber
phoneNumber
*/
export interface User {
  name: string;
  accountNumber: string;
  phoneNumber: string;
}

export const getUser = axios.get<User>('/user/123').then(resp => {
  const user = resp.data;
  return user;
});
