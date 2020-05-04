<template>
  <!-- Register -->

  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(item, key) in errors" :key="key">
              {{ key }} {{ item[0] }}
            </li>
          </ul>

          <form @submit.prevent="handleRegister">
            <fieldset class="form-group">
              <input
                v-model="user.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Register -->
</template>

<script>
import { register } from '@/api/user';
export default {
  middleware: 'notAuthenticated',
  name: 'register',
  asyncData() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      errors: {},
    };
  },
  methods: {
    async handleRegister() {
      // 获取表单数据
      const user = this.user;
      // 表单验证
      // 请求提交
      try {
        const { data } = await register({ user });
        // console.log('注册成功', data);
        this.errors = {};
        // 注册成功跳转到首页
        this.$router.push('/');
      } catch (error) {
        this.errors = error.response.data.errors;
        // console.dir(error);
      }
      // 响应结果处理
    },
  },
};
</script>

<style></style>
