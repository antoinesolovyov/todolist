import { useState } from 'react';
import './Input.css';

function Input(props) {
  const [value, setValue] = useState('')

  const change = (event) => {
    setValue(event.target.value);
  };

  const submit = (event) => {
    const value = event.target[0].value;

    if (value) {
      props.addTask(value);
      setValue('');
    }

    event.preventDefault();
  }

  return (
    <form onSubmit={submit}>
      <input
        className="inputTask"
        value={value} 
        onChange={change}
        placeholder="What needs to be done?"
      />
      <button type="submit"/>
    </form>
  );
}

export default Input;
