// 一般在csr配合路由守卫实现页面访问权限
// 在ssr中不这样做

export default function({ store, redirect }) {
  // If the user is not authenticated
  // 如果用户没有登录，跳到登录页
  if (!store.state.user) {
    return redirect('/login');
  }
}
