import { useState } from 'react';
import './Task.css';

const Task = ({task, updateTask, removeTask}) => {

  const [taskIsHover, setTaskIsHover] = useState(false);

  const mouseEnter = () => {
    setTaskIsHover(true);
  }

  const mouseLeave = () => {
    setTaskIsHover(false);
  }

  const clickCheckbox = () => {
    updateTask({...task, isDone: !task.isDone});
  };

  const editTask = (event) => {
    updateTask({...task, value: event.target.value});
  };

  const clickRemove = () => {
    removeTask(task);
  };

  return (
    <tr onMouseOver={mouseEnter} onMouseOut={mouseLeave}>
      <td className={task.isDone ? "checkbox checked" : "checkbox"} onClick={clickCheckbox}></td>
      <td className="task">
        <input className="editTask" onChange={editTask} value={task.value} type="text"/>
      </td>
      <td className={taskIsHover ? "remove" : ""} onClick={clickRemove}></td>
    </tr>
  );
};

export default Task;
