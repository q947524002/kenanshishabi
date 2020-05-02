<template>
  <div>
    <div class="login_way">
      <div class="phone_num">通过手机验证码登录</div>
    </div>
    <div class="login_user">
      <input type="text" placeholder="手机号" />
      <a href="#">获取验证码</a>
      <input type="text" placeholder="验证码" />
    </div>

    <div class="login_butt">登录啦！</div>
  </div>
</template>
<script>
export default {
  name: "UserPhone"
};
</script>
<style scoped>
.phone_num {
  color: #434343;
  font-weight: 700;
  text-align: center;
  margin-top: 55px;
}
.login_user {
  position: relative;
}
.login_user > a {
  text-decoration: none;
  font-size: 14px;
  color: #adc700;
  position: absolute;
  right: 58px;
  top: -3px;
}
</style>
