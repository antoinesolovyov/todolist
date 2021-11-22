import './List.css';

const List = ({list}) => {
  return (
    <ul>
      {list.map(task => <li key={task.id}>{task.value}</li>)}
    </ul>
  );
};

export default List;
