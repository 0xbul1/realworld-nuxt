<template>
  <!-- Settings -->
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="handleLogout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Settings -->
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  middleware: 'authenticated',
  name: 'settings',
  methods: {
    // 退出处理
    handleLogout() {
      // 删除cookie中用户的登录状态
      Cookie.remove('user');
      // 删除容器中用户登录状态
      this.$store.commit('setUser', null);
      // 跳转回首页
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
