/**
 * API
 */

'use strict'
import axios from 'axios'
export default {
  // 获取banner
  getBanner: () => axios.get('/v2/banner'),
  // 获取推荐歌单
  getPersonalizedPlaylist: () => axios.get('/v2/personalized/playlist'),
  // 获取独家放送
  getPrivatecontent: () => axios.get('/v2/personalized/privatecontent'),
  // 获取最新音乐
  getNewsong: () => axios.get('/v2/personalized/newsong'),
  // 获取mv
  getMv: () => axios.get('/v2/personalized/mv'),
  // 获取dj
  getDj: () => axios.get('/v2/personalized/djprogram'),
  // 获取歌单详情
  getDetail: (params) => axios.get('/v2/playlist/detail', {params}),
  getSongUrl: (params) => axios.get('/v2/music/url', {params}),
  getSongDetail: (params) => axios.get('/v2/music/detail', {params})
}
