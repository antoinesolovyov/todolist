import ListItem from "../ListItem/Task"

import './List.css';

const List = ({list, updateList}) => {

  const updateTask = (task) => {
    const updatedList = [...list.filter(listItem => listItem.id !== task.id), task]
    updateList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  const removeTask = (task) => {
    const updatedList = list.filter(listItem => listItem.id !== task.id);
    updateList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  return (
    <table>
      <tbody>
        {list.map(task => (
          <ListItem key={task.id} task={task} updateTask={updateTask} removeTask={removeTask}></ListItem>
        ))}
      </tbody>
    </table>
  );
};

export default List;
