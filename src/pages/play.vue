<template lang="html">
  <div class="play">
    <div class="playbg" :style="{backgroundImage:`url(${datas.album.blurPicUrl})`}"></div>
    <div class="lay"></div>
    <div class="content">
      <div class="circle">
        <div class="circle_left">
          <div class="clip_left"></div>
        </div>
        <div class="circle_right">
          <div class="clip_right"></div>
        </div>
        <div class="mask">
          <img :src="datas.album.picUrl" alt="">
        </div>
      </div>
      <div class="info">
        <div class="time">
          <span>02:30</span>
          <span>05:20</span>
        </div>
        <div class="msg">
          <h3>{{datas.name}}</h3>
          <span v-for="(names, index) in datas.artists">{{names.name}}<i v-show="index + 1 < datas.artists.length">/</i></span>
        </div>
      </div>
      <div class="control">
        <div class="top">
          <ul>
            <li><i><img src="../../static/1.png" alt="" width="100%"></i></li>
            <li><i><img src="../../static/2.png" alt="" width="100%"></i></li>
            <li><i><img src="../../static/3.png" alt="" width="100%"></i></li>
            <li><i><img src="../../static/4.png" alt="" width="100%"></i></li>
          </ul>
        </div>
        <div class="bottom">
          <ul>
            <li><i class="play_type_icon"><img src="../../static/15.png" alt="" width="100%"></i></li>
            <li><i class="play_status"><img src="../../static/12.png" alt="" width="100%"></i></li>
            <li><i class="play_icon"><img src="../../static/13.png" alt="" width="100%"></i></li>
            <li><i class="play_status"><img src="../../static/14.png" alt="" width="100%"></i></li>
            <li><i class="play_type_icon"><img src="../../static/11.png" alt="" width="100%"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <audio :src="songUrl.url" autoplay="true" id="play"></audio>
  </div>
</template>

<script>
import api from '../api/api.js'
export default {
  data () {
    return {
      songId: '',
      songUrl: '',
      datas: {
        artists: '',
        album: ''
      }
    }
  },
  mounted () {
    this.audioAutoPlay('play')
    this.initData()
  },
  methods: {
    audioAutoPlay (id) {
      var audio = document.getElementById(id)
      var play = function () {
        audio.play()
        document.removeEventListener('touchstart', play, false)
      }
      audio.play()
      document.addEventListener('WeixinJSBridgeReady', function () {
        play()
      }, false)
      document.addEventListener('YixinJSBridgeReady', function () {
        play()
      }, false)
      document.addEventListener('touchstart', play, false)
    },
    initData () {
      this.songId = this.$route.params.id
      api.getSongUrl({id: this.songId})
      .then((res) => {
        console.log(res)
        // 更新DOM
        this.$nextTick(() => {
          this.songUrl = res.data.data[0]
          console.log(this.songUrl)
        })
      })
      .catch((err) => {
        console.log(err)
      })
      api.getSongDetail({id: this.songId})
      .then((res) => {
        console.log(res)
        // 更新DOM
        this.$nextTick(() => {
          this.datas = res.data.songs[0]
          console.log(res)
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
.play {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 1.946667rem 1rem 0
}
.playbg {
  background-image: url(http://music.163.com/api/img/blur/86861418607009);
  -webkit-filter: blur(30px);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transform-origin: center top;
  transform-origin: center top;
  z-index: -1;
  transition: opacity .3s linear;
  opacity: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.lay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.25);
}


.circle {
  width: 8rem;
  height: 8rem;
  position: relative;
  border-radius: 50%;
  background: #EE6723;
  animation: circling 20s infinite linear;
}

.clip_left,.clip_right{
  width:8rem;
  height:8rem;
  position: absolute;
  top: 0px;left: 0px;
}
.circle_left, .circle_right{
  width:8rem;
  height:8rem;
  position: absolute;
  border-radius: 50%;
  top: 0px;left: 0px;
  background: #525452;
}
.circle_right,.clip_right {
  clip:rect(0,auto,auto,4rem);
}
.circle_left , .clip_left{
  clip:rect(0,4rem,auto,0);
}
.circle_right {
  transform: rotate(36deg);
}
.mask {
  width: 7.866667rem;
  height: 7.866667rem;
  border-radius: 50%;
  left: .066667rem;
  top: .066667rem;
  background: #FFF;
  position: absolute;
  text-align: center;
  line-height: 7.866667rem;
  font-size: 16px;
}
.mask img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.info {
  padding: .32rem 0 0;
}
.time {
  display: flex;
  justify-content: space-between;
}
.time span {
  font-size: 20px;
  color: #BCC5E2;
}
.msg {
  margin-top: .6rem;
  text-align: center;
}
.msg h3 {
  font-size: 38px;
  color: #FFFFFF;
}
.msg span {
  opacity: .7;
  font-size: 28px;
  color: #FFFFFF;
}
.control {
  padding: 1.093333rem 0 0;
}
.top {
  font-size: 0;
}
.top > ul > li {
  display: inline-block;
  width: 25%;
  text-align: center;
}
.top > ul > li > i{
  display: inline-block;
}
.bottom {
  margin-top: .8rem;
  margin-bottom: 1.066667rem;
  font-size: 0;
}
.bottom > ul > li {
  display: table-cell;
  vertical-align: middle;
  width: 20%;
  text-align: center;
  font-size: 20px;
}
.play_type_icon {
  display: inline-block;
  width: .466667rem;
  height: .373333rem;
}
.play_icon {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
}
.play_status {
  display: inline-block;
  width: .533333rem;
  height: .733333rem;
}
@-webkit-keyframes circling {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes circling {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}
</style>
