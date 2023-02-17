import * as tasksGateway from './tasksGateway';

export const GET_TASKS_LIST = 'TASKS/GET_TASKS_LIST';

export const getTasksList = tasksListData => ({
  type: GET_TASKS_LIST,
  payload: {
    tasksListData,
  },
});

export const getTasks = () => {
  const thunkAction = dispatch => {
    tasksGateway.fetchTasksList().then(data => dispatch(getTasksList(data)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = (dispatch, getState) => {
    const { tasksList } = getState();
    const taskToUpdate = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...taskToUpdate,
      done: !taskToUpdate.done,
    };
    tasksGateway.updateStatusTask(updatedTask, taskId);
    const changedTasksList = tasksList.map(task => {
      if (task.id === taskId) {
        return {
          ...updatedTask,
        };
      }
      return task;
    });
    dispatch(getTasksList(changedTasksList));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = (dispatch, getState) => {
    const { tasksList } = getState();
    tasksGateway.deleteTask(taskId);
    const updatedTasksList = tasksList.filter(task => task.id !== taskId);
    dispatch(getTasksList(updatedTasksList));
  };
  return thunkAction;
};

export const createTask = newTask => {
  const thunkAction = dispatch => {
    tasksGateway.createTask(newTask).then(() => {
      dispatch(getTasks());
    });
  };
  return thunkAction;
};
