<template lang="html">
  <div class="search">
    <img src="../assets/03.png" alt="" class="music_icon">
    <input type="text" name="" value="" placeholder="搜索音乐、歌词、电台" class="search_input">
    <img src="../assets/04.png" alt="" class="listen_icon">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.search {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.173333rem;
  background: #34393B;
  padding: 0 .4rem;
}
.music_icon {
  margin-top: .32rem;
  width: .373333rem;
  height: .56rem;
}
.listen_icon {
  width: .48rem;
  height: .453333rem;
  margin-top: .36rem;
}
.search_input {
  width: 7.653333rem;
  height: .853333rem;
  line-height: .853333rem;
  border-radius: .16rem;
  font-size: 28px;
  text-align: center;
  margin-top: .16rem;
  outline: 0;
  border:0;
}
.search_input::-webkit-input-placeholder {
  color: #BDBDBD;
}
</style>
