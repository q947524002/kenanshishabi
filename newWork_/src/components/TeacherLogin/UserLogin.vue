<template>
  <div>
    <div class="login_way">
      <span class="underline">账号登录</span>
      <span>微信登录</span>
    </div>
    <div class="login_user">
      <input type="text" placeholder="手机号" />
      <input type="password" placeholder="密码" />
    </div>
    <div class="forget_pas">
      <a href="#">忘记密码？</a>
    </div>
    <div class="login_butt">登录啦！</div>
    <div class="register">
      <span>还没有账号？ 请</span>
      <a href="#">注册</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserLogin"
};
</script>
<style>
</style>