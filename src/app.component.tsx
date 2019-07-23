import React from 'react';
import logo from './logo.svg';
import './app.styles.css';
import { CreateTaskForm } from './tasks/create-task/create-task-form.component';
import { TaskList } from './tasks/task-list/task-list.component';

function App() {
  return (
    <div className="App">
      <section>
        <CreateTaskForm />
      </section>
      <section>
        <TaskList />
      </section>
    </div>
  );
}

export default App;
