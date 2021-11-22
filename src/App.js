import { useState } from 'react';
import './App.css';

function Task(value) {
  this.value = value;
  this.id = new Date().getTime();
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    setTasks(tasks => [
      ...tasks,
      new Task(event.target[0].value)
    ]);
  };

  return (
    <>
      <form onSubmit={addTask}>
        <input placeholder="What needs to be done?"></input>
      </form>

      {tasks.map(task => <p key={task.id}>{task.value}</p>)}
    </>
  );
}

export default App;
