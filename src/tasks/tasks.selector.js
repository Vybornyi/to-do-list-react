import { createSelector } from 'reselect';

export const tasksListSelector = state => state.tasksList;

export const sortTasksListSelector = createSelector([tasksListSelector], tasksList => {
  if (!tasksList) {
    return null;
  }
  return tasksList.slice().sort((a, b) => a.done - b.done);
});
