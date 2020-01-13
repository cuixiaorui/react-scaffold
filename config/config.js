// ref: https://umijs.org/config/
import routes from './router.config';

export default {
  base: '/',
  publicPath: '/',
  treeShaking: true,
  history: 'hash',
  routes,
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      secure: false,
      pathRewrite: { '^/api': '' },
    },
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'react-scaffold',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
    [
      'umi-plugin-gh-pages',
      {
        dest: 'dist',
      },
    ],
  ],
};
