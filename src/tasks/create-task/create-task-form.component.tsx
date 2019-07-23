import React, { useState, ChangeEvent } from 'react';
import {
  TaskService,
  Task,
  WorkFlowable,
} from '../../_shared/services/task.service';
import moment from 'moment';

const taskService = new TaskService();

type StringOrNumber = string | number;

let myValue: StringOrNumber = 1;

export const CreateTaskForm = () => {
  const [name, setName] = useState('');
  const [assigned, setAssigned] = useState('');
  const [dueDate, setDueDate] = useState('');

  const [task, setTask] = useState<Task | null>(null);

  const someFunc = (task?: Task) => {
    if (task) {
      console.log(task.name);
    }
  };

  const onTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onAssignedToChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAssigned(e.target.value);
  };
  const onDueDateChange = (e: ChangeEvent<HTMLDataElement>) => {
    setDueDate(e.target.value);
  };

  function setDefaultValue<T>(fieldName: string, value: T, defaultValue: T): T {
    const form: { [key: string]: T } = {};
    return form[fieldName] !== null ? form[fieldName] : defaultValue;
  }

  setDefaultValue<string>('firstName', assigned, 'N/A');

  setDefaultValue<Task & WorkFlowable | null>('currentTask', task, {
    id: '1',
    name: 'some task',
    assigned: 'Tim',
    dueDate: moment(),
    status: 'done',
  });

  const onCreate = () => {
    const newTask: Task & WorkFlowable = {
      id: Date.now().toString(),
      name,
      assigned,
      dueDate: moment(dueDate),
      status: 'done',
    };

    taskService.save(newTask);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        Task:
        <input type="text" value={name} onChange={onTaskChange} />
      </label>
      <label>
        Assigned To:
        <input type="text" value={assigned} onChange={onAssignedToChange} />
      </label>
      <label>
        Due:
        <input type="date" value={dueDate} onChange={onDueDateChange} />
      </label>
      <button onClick={onCreate}>Create</button>
    </div>
  );
};
