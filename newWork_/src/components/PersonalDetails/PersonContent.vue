<template>
  <div class="PersonContent">
    <div class="persondet_left">
      <div class="UserInfo">
        <div class="headpor">
          <img src="../../assets/2.jpg" alt />
        </div>
        <div class="user_message">
          <p>
            罗密欧
            <img src="../../assets/girl.png" alt />
          </p>
          <p class="infotip">
            信息完整度
            <progress value="10" min="0" max="10"></progress>
            <span>高</span>
          </p>
          <p class="contact_way">
            <img src="../../assets/phone.png" alt />
            <img src="../../assets/card.png" alt />
            <img src="../../assets/email.png" alt />
          </p>
        </div>
      </div>
      <div class="wallet">
        <div class="withdraw_deposit">申请提现</div>
        <div class="balance">
          <p>账户余额</p>
          <span class="balance_num">248</span>
          <span>元</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.PersonContent {
  background-color: #f4f4f4;
  height: 644px;
}
.persondet_left {
  width: 420px;
  height: 525px;
  background-color: #ffffff;
  margin: 30px 0px 0px 120px;
  display: inline-block;
}
.headpor {
  padding: 25px;
  float: left;
}
.headpor > img {
  width: 80px;
  height: 80px;
}
.user_message img {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}
.user_message {
  display: inline-block;
}
.infotip {
  font-size: 11px;
  color: #666666;
}
.infotip > span {
  color: #00aaff;
  margin-left: 10px;
}
.infotip > progress {
  width: 120px;
  background: #00aaff;
  height: 6px;
  margin-left: 10px;
  border-radius: 15px;
  margin-bottom: 3px;
}
::-webkit-progress-value {
  background-color: #00aaff;
  /* 进度条被填充部分的背景颜色 */
}
.contact_way > img {
  margin-right: 5px;
}
.user_message {
  margin-top: 25px;
}
.user_message > p {
  margin-bottom: 10px;
}
.contact_way {
  margin-left: -5px;
}
.UserInfo::after {
  visibility: hidden;
  clear: both;
  height: 0;
  content: "";
  display: block;
}
.UserInfo {
  zoom: 1;
  border-bottom: 1px solid #f6f6f6;
}
.withdraw_deposit {
  width: 144px;
  height: 25px;
  background-color: #00aaff;
  border-radius: 15px;
  color: #ffffff;
  text-align: center;
  line-height: 25px;
  margin: 35px;
  float: left;
  font-size: 12px;
}
.balance {
  margin-top: 20px;
  display: inline-block;
  font-size: 14px;
  color: #686868;
}
.balance > .balance_num {
  font-size: 28px;
  color: #333333;
}
.balance_num + span {
  padding-left: 5px;
  font-size: 13px;
}
.balance > p {
  padding-bottom: 5px;
}
.wallet::after {
  content: "";
  height: 0;
  clear: both;
  visibility: hidden;
  display: block;
}
.wallet {
    zoom: 1;
    padding-bottom: 6px;
    border-bottom: 1px solid #f6f6f6;
}
</style>