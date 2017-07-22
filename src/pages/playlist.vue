<template lang="html">
  <div class="playlist">
    <loading v-if='isloading'></loading>
    <div class="" v-else>
      <div class="playlist_header">
        <div class="blbg" :style="{backgroundImage:`url(${datas.coverImgUrl})`}"></div>
        <div class="lay"></div>
        <div class="cvr">
          <img :src="datas.coverImgUrl" alt="" width="100%">
          <span class="tag">歌单</span>
        </div>
        <div class="cnt">
          <h2 class="j-plname z-twoline">{{datas.name}}</h2>
          <div class="art s-fc3 f-thide">
            <img :src="datas.creator.avatarUrl" alt="" class="ava">{{datas.creator.nickname}}
          </div>
        </div>
      </div>
      <div class="playlist_bill">
        <h2 class="f-bd u-hd">歌曲列表</h2>
        <ul class="list">
            <router-link  tag="li" v-for='(item, index) in datas.tracks' :to="'/play/' + item.id" :key='item.id'>
            <a href="#">
              <span class="num">{{ index + 1 }}</span>
              <span class="detail">
                <h3 class="s-fc1 f-thide">{{item.name}}{{item.alias[0]}}</h3>
                <p class="s-fc8 f-thide">
                  <span v-for="(names, index) in item.artists">{{names.name}}<i v-show="index + 1 < item.artists.length">/</i></span> - {{item.album.name}}
                </p>
              </span>
              <span class="play"></span>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import api from '../api/api.js'
import loading from '../components/loading.vue'
import footGuide from '../components/foot_guide.vue'

export default {
  data () {
    return {
      playlistId: '',
      datas: {
        creator: ''
      },
      isloading: true
    }
  },
  components: {
    loading,
    footGuide
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.playlistId = this.$route.params.id
      api.getDetail({id: this.playlistId})
      .then((res) => {
        console.log(res)
        // 更新DOM
        this.$nextTick(() => {
          this.datas = res.data.result
          this.isloading = false
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.playlist {
  width: 100%;
  background-color: #f8f8f8;
}
.playlist_header {
  position: relative;
  width: 100%;
  height: 4.96rem;
  box-sizing: border-box;
  padding: .8rem .266667rem .8rem .4rem;
  overflow: hidden;
}
.blbg {
  background-image: url(http://p4.music.126.net/nGeCOE1MUY6Kf7j7Le73bQ==/3420580690947051.jpg?param=177y177);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
.lay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.25);
}
.cvr {
  position: relative;
  float: left;
  width: 3.36rem;
  height: 3.36rem;
}
.tag {
  position: absolute;
  z-index: 3;
  top: .266667rem;
  left: 0px;
  width: .906667rem;
  height: .453333rem;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: .453333rem;
  background-color: rgba(217,48,48,.8);
  border-radius: 0 9999px 9999px 0;
}
.cnt {
  position: relative;
  margin-left: 3.866667rem;
}
.cnt h2 {
  font-size: 34px;
  line-height: 1.3;
  color: #fefefe;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.art {
  position: relative;
  margin-top: .533333rem;
  font-size: 28px;
  color: rgba(255,255,255,0.7);
}
.ava {
  width: .8rem;
  height: .8rem;
  border-radius: 9999px;
  vertical-align: middle;
  margin-right: .133333rem;
}
.u-hd {
  height: .613333rem;
  padding: 0 .266667rem;
  background: #ebebeb;
  line-height: .613333rem;
  font-size: 24px;
  color: #666;
}
.list li {
  height: 1.466667rem;
  line-height: 1.4;
  background-color: #f8f8f8;
}
.list a {
  position: relative;
  display: block;
  height: 100%;
}
.list .num {
  float: left;
  width: .96rem;
  height: 1.466667rem;
  line-height: 1.466667rem;
  text-align: center;
  font-size: 34px;
  color: #999;
}
.detail {
  display: block;
  height: 100%;
  margin-left: .96rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.detail h3 {
  padding: .213333rem 1.066667rem 0 0;
  font-size: 32px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detail p{
  padding-right: 1.066667rem;
  font-size: 24px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.play {
  position: absolute;
  width: .533333rem;
  height: .533333rem;
  right: .266667rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-image: url(http://music.163.com/style/mobile/img/share/share_icon_play@2x.png?b169e3a1ebe334cb6bffc8c91e9a510d);
  background-repeat: no-repeat;
  background-size: .533333rem;
  background-position: center;
}
</style>
