import React from 'react';
import { connect } from 'react-redux';
import * as tasksActions from './tasks.actions';

const Task = ({ text, date, done, updateTask, id, deleteTask }) => (
  <li className={done ? 'list-item list-item_done' : 'list-item'}>
    <input
      defaultChecked={done}
      type="checkbox"
      className="list-item__checkbox"
      data-create-date={date}
      onChange={() => updateTask(id)}
    />
    <p className="list-item__text">{text}</p>

    <button onClick={() => deleteTask(id)} className="list-item__delete-btn"></button>
  </li>
);

const mapDispatch = {
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};
export default connect(null, mapDispatch)(Task);
