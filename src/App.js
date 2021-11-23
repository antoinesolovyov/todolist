import { useState, useEffect } from 'react';

import Input from './components/Input/Input'
import List from './components/List/List'

import './App.css';

function Task(value) {
  this.id = new Date().getTime();
  this.value = value;
  this.isDone = false;
};

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem('list')
    list && setList(JSON.parse(list))
  }, []);

  const addTask = (value) => {
    const updatedList = [...list, new Task(value)];
    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  };

  return (
    <main>
      <Input addTask={addTask}></Input>
      <List list={list} updateList={setList}></List>
    </main>
  );
}

export default App;
