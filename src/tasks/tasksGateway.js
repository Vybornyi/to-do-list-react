const baseUrl = 'https://62df8de39c47ff309e881c18.mockapi.io/api/v1/todotasks/';

export const fetchTasksList = () =>
  fetch(baseUrl).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error();
  });

export const updateStatusTask = (taskData, taskId) =>
  fetch(`${baseUrl}${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(responce => {
    if (!responce.ok) {
      throw new Error();
    }
  });
export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(responce => {
    if (!responce.ok) {
      throw new Error();
    }
  });
export const deleteTask = taskId =>
  fetch(`${baseUrl}${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(responce => {
    if (!responce.ok) {
      throw new Error();
    }
  });
