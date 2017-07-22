<template lang="html">
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banner" key="item.id">
        <img :src="item.pic" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  props: ['banner'],
  components: {
    Swipe,
    SwipeItem
  }
}
</script>

<style lang="css">
.swiper {
  width: 100%;
  height: 3.666667rem;
}
.swiper img {
  width: 100%;
  height: 3.666667rem;
}
</style>
