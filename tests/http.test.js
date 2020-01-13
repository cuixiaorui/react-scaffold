import axios from '@/utils/http/index';

import * as Response from '@/utils/http/response.js';
import * as Request from '@/utils/http/request.js';

describe('axios', () => {
  it('timeout is equal to the 1000 * 12', () => {
    const timeout = 1000 * 12;
    expect(axios.defaults.timeout).toBe(timeout);
  });

  describe('request', () => {
  });

  describe('response', () => {
    describe('success', () => {
      test.each([200, 201])('请求头在[200 - 300]之间: %i return resolve', status => {
        const res = { status };
        return expect(Response.handleSuccess(res)).resolves.toEqual(res);
      });

      test.each([100, 301])('请求头不在[200 - 300]之间: %i return reject', status => {
        const res = { status };
        return expect(Response.handleSuccess(res)).rejects.toEqual(res);
      });
    });
    describe('error', () => {
      // 基于状态码来区分不同的行为
      it('to login when error code is equal to the 401 ', () => {
        const error = {
          response: {
            status: 401,
          },
        };

        expect(Response.handleError(error)).toBe('未登录状态，跳转登录页');
      });

      it('登录过期，请重新登录 when error code is equal to the 403 ', () => {
        const error = {
          response: {
            status: 403,
          },
        };

        expect(Response.handleError(error)).toBe('登录过期，请重新登录');
      });

      it('other case return current error info', () => {
        const error = {
          response: {
            status: 410,
          },
        };

        expect(Response.handleError(error)).toEqual(error);
      });
    });
  });
});
