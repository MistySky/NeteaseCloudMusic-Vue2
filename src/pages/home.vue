<template lang="html">
  <div class="">
    <header class="header">
      <search></search>
      <navbar></navbar>
    </header>
    <loading v-if='isloading'></loading>
    <div v-show='!isloading' class="container">
      <swiper :banner='banners'></swiper>
      <type></type>
      <playlist :playlist='playlists' playlist-title='推荐歌单'></playlist>
      <privatecontent :playlist='privatecontents' playlist-title='独家放送'></privatecontent>
      <playlist :playlist='newLists' playlist-title='最新音乐'></playlist>
      <mvlist :playlist='mvLists' playlist-title='推荐MV'></mvlist>
      <playlist :playlist='djLists' playlist-title='主播电台'></playlist>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import search from '../components/search.vue'
import navbar from '../components/navbar.vue'
import swiper from '../components/swiper.vue'
import type from '../components/type.vue'
import playlist from '../components/playlist.vue'
import loading from '../components/loading.vue'
import privatecontent from '../components/privatecontent.vue'
import mvlist from '../components/mvlist.vue'
import footGuide from '../components/foot_guide.vue'

// import axios from 'axios'
import api from '../api/api.js'
// import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      banners: '',
      playlists: '',
      isloading: true,
      privatecontents: '',
      newLists: '',
      mvLists: '',
      djLists: ''
    }
  },
  components: {
    search,
    navbar,
    swiper,
    type,
    playlist,
    loading,
    privatecontent,
    mvlist,
    footGuide
  },
  mounted () {
    // 获取banner
    api.getBanner()
    .then((res) => {
      this.banners = res.data.banners
      // 更新DOM
      this.$nextTick(() => {
      })
    })
    .catch((err) => {
      console.log(err)
    })
    // 获取推荐歌单
    api.getPersonalizedPlaylist()
    .then((res) => {
      this.playlists = res.data.result
      this.isloading = false
      // 更新DOM
      this.$nextTick(() => {
      })
    })
    .catch((err) => {
      console.log(err)
    })
    // 获取独家放送
    api.getPrivatecontent()
    .then((res) => {
      this.privatecontents = res.data.result
      // 更新DOM
      this.$nextTick(() => {
      })
    })
    .catch((err) => {
      console.log(err)
    })
    // 获取最新音乐
    api.getNewsong()
    .then((res) => {
      this.newLists = res.data.result.splice(0, 6)
      // 更新DOM
      this.$nextTick(() => {
      })
    })
    .catch((err) => {
      console.log(err)
    })
    // 获取mv
    api.getMv()
    .then((res) => {
      this.mvLists = res.data.result
      // 更新DOM
      this.$nextTick(() => {
      })
    })
    .catch((err) => {
      console.log(err)
    })
    // 获取dj
    api.getDj()
    .then((res) => {
      this.djLists = res.data.result
      // 更新DOM
      this.$nextTick(() => {
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
}
.container {
  margin-top: 2.346667rem;
  margin-bottom: 1.306667rem;
}
</style>
