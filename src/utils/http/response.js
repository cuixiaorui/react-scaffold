export const handleSuccess = res => {
  return res.status >= 200 && res.status <= 300 ? Promise.resolve(res) : Promise.reject(res);
};

const statusMap = {
  '401': handleHttpStatus401,
  '403': handleHttpStatus403,
};
export const handleError = error => {
  const status = error.response.status;
  const handler = statusMap[status];

  if (handler) {
    return handler.call(null, error);
  } else {
    return error;
  }
};
function handleHttpStatus403(error) {
  return '登录过期，请重新登录';
}

function handleHttpStatus401(error) {
  return '未登录状态，跳转登录页';
}
