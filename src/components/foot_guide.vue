<template lang="html">
  <div class="foot_guide">
    <div class="guide_item">
      <img src="../assets/cm2_btm_icn_discovery.png" alt="">
      发现音乐
    </div>
    <div class="guide_item">
      <img src="../assets/cm2_btm_icn_music.png" alt="">
      我的音乐
    </div>
    <div class="guide_item">
      <img src="../assets/cm2_btm_icn_friend.png" alt="">
      朋友们
    </div>
    <div class="guide_item">
      <img src="../assets/cm2_btm_icn_account.png" alt="">
      账号
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.foot_guide {
  width: 100%;
  height: 1.306667rem;
  position: fixed;
  bottom: 0;
  background: url(../assets/bottombg.png) no-repeat;
  background-size: cover;
  font-size: 0;
}
.guide_item {
  display: inline-block;
  width: 25%;
  height: 100%;
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
  padding: .133333rem 0;
  opacity: .5;
}
.guide_item img {
  display: block;
  width: .666667rem;
  height: .666667rem;
  margin: 0 auto .04rem;
}
</style>
