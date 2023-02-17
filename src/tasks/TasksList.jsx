import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import * as tasksActions from './tasks.actions';
import { sortTasksListSelector } from './tasks.selector';

const TasksList = ({ tasksList, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, []);
  if (!tasksList) {
    return null;
  }
  return (
    <ul className="list">
      {tasksList.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

const mapState = state => ({
  tasksList: sortTasksListSelector(state),
});

const mapDispatch = {
  getTasks: tasksActions.getTasks,
};

export default connect(mapState, mapDispatch)(TasksList);
