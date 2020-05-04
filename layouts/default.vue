<template>
  <div>
    <!-- Header -->
    <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="index.html">NuxtJS</a> -->
        <nuxt-link class="navbar-brand" to="/">NuxtJS</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <a class="nav-link active" href="">Home</a> -->
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
          <template v-if="$store.state.user">
            <li class="nav-item">
              <!-- <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Post
            </a> -->
              <nuxt-link class="nav-link" to="/edit">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a> -->
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <!-- <a class="nav-link" href="">Sign up</a> -->
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="">Sign in</a> -->
              <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- /Header -->
    <nuxt />
    <!-- Footer -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">NuxtJS</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
    <!-- /Footer -->
  </div>
</template>

<script>
export default {
  name: 'default',
};
</script>

<style></style>
