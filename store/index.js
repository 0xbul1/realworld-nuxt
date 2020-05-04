// 只有从服务端运行才加载cookieparser模块
const cookieparser = process.server ? require('cookieparser') : undefined;
// 容器的状态
export const state = () => {
  return {
    // 用户状态
    user: null,
    // 一般操作，但是在服务端报错，服务端没有window
    // user: JSON.parse(window.sessionStorage.getItem('user')),
  };
};
// 容器的mutations
export const mutations = {
  setUser(state, user) {
    state.user = user;
    // 如果是csr可以存到本地存储
    // window.sessionStorage.setItem('user', JSON.stringify(user));
  },
};
export const actions = {
  // nuxt在服务端渲染时执行nuxtServerInit方法
  nuxtServerInit({ commit }, { req }) {
    let user = null;
    // 如果请求头中有Cookie数据
    // 一般cookie的数据格式为字符串 key=value；key=value；key=value；
    // cookieparser.parse就是将原始的cookie格式字符串转成对象{key:value,key:value}
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        // 将cookie的user的值转成对象
        user = JSON.parse(parsed.user);
      } catch (err) {
        // No valid cookie found
      }
    }
    // 调用mutation更新状态
    commit('setUser', user);
  },
};
