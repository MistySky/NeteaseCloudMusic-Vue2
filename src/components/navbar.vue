<template lang="html">
  <div class="navbar">
    <ul class="clear">
      <li ><a href="#" class="active">个性推荐</a></li>
      <li ><a href="#">歌单</a></li>
      <li ><a href="#">主播电台</a></li>
      <li ><a href="#">排行榜</a></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.navbar {
  width: 100%;
  height: 1.173333rem;
  padding: .253333rem .466667rem
}
.navbar ul {
  width: 100%;
  height: .666667rem;
  font-size: 0;
}
.navbar ul > li {
  display: inline-block;
  font-size: 26px;
  text-align: center;
  width: 25%;
}
/*.navbar ul > li:last-child {
  margin-right: 0;
}*/
.active {
  display: inline-block;
  background: #34393B;
  border-radius: 1.333333rem;
  color: #ffffff;
  height: .666667rem;
  padding: 0 .32rem !important;
  line-height: .666667rem;
}
</style>
