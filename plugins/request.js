// import request from '@/utils/request';
/**
 * 注意：这里将utils/request.js封装进plugins
 * 必须结合Nuxt的插件规则才能获取容器登录数据
 * 这里把axios封装成了一个Nuxt插件
 * 插件模块必须导出默认成员：一个函数
 * 插件必须显示的注册到nuxt.coinfig.js中
 */
import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io/',
});

export default ({ store }) => {
  // Add a request interceptor
  request.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      const { user } = store.state;
      if (user) {
        // 接口文档要求
        config.headers['Authorization'] = `Token ${user.token}`;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  request.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response;
    },
    (error) => {
      // Do something with response error
      return Promise.reject(error);
    },
  );
};
