<template>
  <!-- Login -->
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Login</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(item, key) in errors" :key="key">
              {{ key }} {{ item[0] }}
            </li>
          </ul>

          <form @submit.prevent="handleLogin">
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Login -->
</template>

<script>
import { login } from '@/api/user';
// jscookie是一个客户端模块，服务端不需要
// 对于这种只能在某端加载使用的模块，我们要动态加载
// import Cookie from 'js-cookie';
// process.client是node的进程对象，nuxt会进行处理，判断代码执行环境
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
  middleware: 'notAuthenticated',
  name: 'login',
  asyncData() {
    return {
      user: {
        email: '',
        password: '',
      },
      errors: {},
    };
  },
  methods: {
    async handleLogin() {
      const user = this.user;
      try {
        const { data } = await login({ user });
        this.errors = {};
        // 将用户信息存到Vuex容器
        this.$store.commit('setUser', data.user);
        // 为了防止页面刷新数据丢失，一般存到本地存储，但是涉及到ssr，将登录状态持久化到cookie
        Cookie.set('user', data.user);
        // 登录成功跳转到首页
        this.$router.push('/');
      } catch (error) {
        this.errors = error.response.data.errors;
      }
      // 响应结果处理
    },
  },
};
</script>

<style></style>
