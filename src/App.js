import { useState, useEffect } from 'react';

import Input from './Input/Input'
import List from './List/List'

import './App.css';

function Task(value) {
  this.id = new Date().getTime();
  this.value = value;
  this.isDone = false;
};

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    tasks && setTasks(JSON.parse(tasks))
  }, []);

  const addTask = (value) => {
    const updatedTasks = [...tasks, new Task(value)];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <main>
      <Input addTask={addTask}></Input>
      <List list={tasks}></List>
    </main>
  );
}

export default App;
