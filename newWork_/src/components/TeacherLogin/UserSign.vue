<template>
  <div>
    <div class="login_way">
      <div class="phone_sign">通过手机验证码登录</div>
    </div>
    <div class="sign_user">
      <input type="text" placeholder="手机号" />
      <a href="#">获取验证码</a>
      <input type="text" placeholder="验证码" />
      <input type="password" placeholder="密码" />
    </div>

    <div class="login_butt">登录啦！</div>
  </div>
</template>
<script>
export default {
  name: "UserSign"
};
</script>
<style scoped>
.sign_user > input {
  display: block;
  border-style: none;
  border-bottom: 1px solid #eeeeee;
   margin: 0 auto;
  width: 450px;
  margin-top: 45px;
  padding-bottom: 5px;
}
.sign_user>a {
    text-decoration: none;
    position: absolute;
    color:#adc700;
    right: 68px;
    top: -3px
}
.phone_sign {
  color: #434343;
  text-align: center;
  margin-top: 55px;
  font-weight: 700
}
.sign_user {
    position: relative;
}
</style>