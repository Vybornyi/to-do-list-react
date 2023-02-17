import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from './tasks.actions';

const CreateTaskInput = ({ createTask }) => {
  const [inputText, onChangeInput] = useState('');
  const onCreateTask = () => {
    const newTask = {
      date: new Date().toISOString(),
      text: inputText,
      done: false,
    };
    createTask(newTask);
    onChangeInput('');
  };
  return (
    <div className="create-task">
      <input
        onChange={e => onChangeInput(e.target.value)}
        className="create-task__input"
        type="text"
        value={inputText}
      />
      <button onClick={onCreateTask} className="btn create-task__btn">
        Create
      </button>
    </div>
  );
};

const mapDispatch = {
  createTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(CreateTaskInput);
