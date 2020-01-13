import * as t from './actionTypes';

export const fetchUsers = () => ({
  type: t.FETCH_USERS,
});

export const setUsers = users => ({
  type: t.SET_USERS,
  payload: { users },
});
