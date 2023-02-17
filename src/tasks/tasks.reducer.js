import { GET_TASKS_LIST } from './tasks.actions';

const initialState = {
  tasksList: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_LIST:
      return {
        ...state,
        tasksList: action.payload.tasksListData,
      };
    default:
      return state;
  }
};

export default tasksReducer;
