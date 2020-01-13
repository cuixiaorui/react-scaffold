import { call, put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import models from './body.js';
import { fetchUsers } from '../services/body';

jest.mock('../services/body.js', () => {
  return {
    fetchUsers: jest.fn(() => {
      return [1, 2, 3];
    }),
  };
});

describe('body', () => {
  describe('store', () => {
    it('should fetch users when dispatch body/fetchUsers action', () => {
      const mockUsers = [1, 2, 3];
      expectSaga(models.effects.fetchUsers, null, { call, put })
        .withReducer(models.reducers.setUsers, { exercises: [] })
        .hasFinalState({
          users: mockUsers,
        })
        .run();

      expect(fetchUsers).toBeCalled();
    });
  });
});
