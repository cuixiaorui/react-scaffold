import { fetchUsers } from '../services/body';
import * as actions from '../actions';

export default {
  namespace: 'body',
  state: {
    users: [],
  },
  reducers: {
    setUsers(state, { payload }) {
      return { ...state, users: payload.users };
    },
  },

  effects: {
    *fetchUsers(action, { call, put }) {
      const users = yield call(fetchUsers);
      yield put(actions.setUsers(users));
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/body') {
          dispatch(actions.fetchUsers());
        }
      });
    },
  },
};
