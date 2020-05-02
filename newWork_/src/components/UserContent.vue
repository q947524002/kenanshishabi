<template>
  <div class="content">
    <div class="teacher_logo">
      <ul>
        <li class="user_id">
          <img src="../assets/student.png" alt />
          我是学生
        </li>
        <li class="user_id user_touch">
          <img src="../assets/teach.png" alt />
          我是讲师
        </li>
        <li class="user_id">
          <img src="../assets/HR.png" alt />
          我是HR
        </li>
      </ul>
    </div>
    <div class="teacher_r">
      <div class="teacher_centen">
        <!-- <UserLogin></UserLogin> -->
        <!-- <UserPhone></UserPhone> -->
        <UserSign></UserSign>
      </div>
    </div>
  </div>
</template>
<script>
// import UserLogin from "./TeacherLogin/UserLogin.vue";
// import UserPhone from "./TeacherLogin/UserPhone.vue"
import UserSign from "./TeacherLogin/UserSign.vue"
export default {
  name: "UserContent",
  components: {
    // UserLogin ,
    // UserPhone ,
    UserSign
  }
};
</script>
<style>
.content {
  display: flex;
  height: 93.2vh;
}
.teacher_logo {
  flex: 3;
  background-image: url(../assets/oldteacher.jpg);
  background-size: 100% 100%;
  position: relative;
}
.teacher_r {
  flex: 7;
  height: 93vh;
  background-color: #f9f9f9;
  margin-top: 3px;
}
.user_id {
  color: white;
  width: 113px;
  height: 79px;
  text-align: center;
  font-size: 14px;
  padding-top: 20px;
  background-color: #202421;
}
ul {
  position: absolute;
  right: 0;
  list-style: none;
  top: 17%;
}
li > img {
  width: 35px;
  height: 35px;
  /* background-size: 100% */
  display: block;
  margin: 0 auto;
}
.teacher_centen {
  width: 565px;
  height: 398px;
  position: absolute;
  background-color: white;
  top: 22.5%;
  box-shadow: #e1e1e1 2px 0px 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.login_way > span {
  padding: 50px 100px 0px 100px;
  display: inline-block;
  font-size: 14px;
  color: #7c8495;
}
.login_user > input {
  border-style: none;
  border-bottom: 1px solid #eeeeee;
  display: block;
  margin: 0 auto;
  width: 450px;
  margin-top: 60px;
  padding-bottom: 5px;
}

.login_way::before {
  content: "";
  display: block;
  position: absolute;
  top: 88px;
  left: 60px;
  width: 450px;
  height: 4px;
  background: #eeeeee;
}
.underline::before {
  background-color: #adc700;
  content: "";
  display: block;
  position: absolute;
  top: 88px;
  left: 60px;
  width: 220px;
  height: 4px;
}
.login_way > .underline {
  padding-left: 140px;
  color: #adc700;
  font-weight: 700;
}
.forget_pas > a {
  color: #989fac;
  font-weight: 600;
  font-size: 14px;
  right: 70px;
  position: absolute;
  bottom: 138px;
  text-decoration: none;
}
.login_butt {
  position: absolute;
  left: 50%;
  width: 400px;
  height: 30px;
  border-radius: 15px;
  background-color: #adc700;
  text-align: center;
  transform: translate(-50%, -50%);
  bottom: 51px;
  line-height: 30px;
  color: #f9fbee;
  font-size: 12px;
}
.register {
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  color: #cccccc;
  left: 50%;
  transform: translate(-50%, -50%);
}
.register > a {
  text-decoration: none;
  color: #adc700;
}
.user_touch {
  height: 180px;
  background-color: #adc700;
  vertical-align: middle;
  display: table-cell;
}
</style>