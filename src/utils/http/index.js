import * as Axios from 'axios';
import * as Response from './response.js';
import * as Request from './request';

const instance = Axios.create({ timeout: 1000 * 12 });

instance.interceptors.request.use(config => {
  return Request.handler(config);
});
instance.interceptors.response.use(Response.handleSuccess, Response.handleError);
export default instance;
