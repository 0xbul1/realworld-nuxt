export default {
  mode: 'spa',
  // plugins: ['~/plugins/axios-interceptors.js'],
  plugins: ['~/plugins/request.js'],
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    // 访问路径是怎样的就怎么配置
    // publicPath: 'http://03em02.coding-pages.com/',
    publicPath: 'http://nuxt.20201060.xyz/',
    // publicPath: 'http://127.0.0.1:5500/dist/',
  },
};
