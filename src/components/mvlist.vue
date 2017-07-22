<template lang="html">
  <div class="playlist">
    <div class="playlist_title">
      {{playlistTitle}}
    </div>
    <ul>
      <li v-for='(item, index) in playlist' :key='item.id'>
        <img alt="" v-lazy="item.picUrl">
        <h5>{{item.name}}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui'

export default {
  props: ['playlist', 'playlistTitle'],
  mounted () {
    console.log(this.playlist)
    console.log(this.playlistTitle)
  },
  components: {
    Lazyload
  }
}
</script>

<style lang="css" scoped>
.playlist {
  width: 100%;
  /*padding: .533333rem 0;*/
}
.playlist_title {
  width: 2.16rem;
  height: .586667rem;
  line-height: .586667rem;
  margin: 0 auto;
  background: #FC3159;
  font-size: 32px;
  color: #FFFFFF;
  text-align: center;
}
.playlist > ul {
  width: 100%;
  padding: .36rem .133333rem;
  font-size: 0;
}
.playlist > ul >li {
  display: inline-block;
  width: calc(50% - .24rem);
  margin: 0 .12rem .533333rem .12rem;
  font-size: 10px
}
img {
  width: 100%;
  height: 100%;
  min-width: 3rem;
  min-height: 3rem;
}
h5 {
  margin-top: .173333rem;
  font-size: 28px;
  color: #353535;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
img[lazy=loading] {
  background: url(../../static/default_cover.png) no-repeat;
  background-size: cover;
}
</style>
