<template lang="html">
  <div class="type">
    <ul>
      <li>
        <i class="fm_icon"></i>
        <h4>私人FM</h4>
      </li>
      <li>
        <i class="day_icon"></i>
        <h4>每日推荐</h4>
      </li>
      <li>
        <i class="new_icon"></i>
        <h4>新歌榜</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.type {
  width: 100%;
  padding: .533333rem 0 1.066666rem;
}
.type > ul {
  font-size: 0;
}
.type > ul > li {
  width: calc(33.333333% - (.866667rem)*2);
  display: inline-block;
  margin: auto .866667rem;
  font-size: 16px;
  text-align: center;
}
.type > ul > li > i{
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 auto;
}
h4 {
  margin-top: .066667rem;
  font-size: 24px;
  color: #333333;
}
.fm_icon {
  background: url(../assets/05.png) no-repeat;
  background-size: cover;
}
.day_icon {
  background: url(../assets/06.png) no-repeat;
  background-size: cover;
}
.new_icon {
  background: url(../assets/07.png) no-repeat;
  background-size: cover;
}
</style>
