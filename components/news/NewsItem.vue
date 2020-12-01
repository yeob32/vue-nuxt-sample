<template>
  <div>
    <infinite-loading direction="top" @infinite="infiniteHandlerTopScroll">
      <div slot="spinner"></div>
      <div slot="no-more">No more message</div>
      <div slot="no-results">No results message</div>
      <div slot="error" slot-scope="{ trigger }">
        Error message, click
        <a href="javascript:;" @click="trigger">here</a> to retry
      </div>
      <!-- <span slot="no-more"></span> -->
    </infinite-loading>

    <div v-for="(item, index) in directionData" :key="index">
      <div style="width:400px;hegith=400px;">
        <p>{{ `${index}_${item.email}` }}</p>
        <p>{{ `${index}_${item.email}` }}</p>
        <p>{{ `${index}_${item.email}` }}</p>
        <p>{{ `${index}_${item.email}` }}</p>
        <p>{{ `${index}_${item.email}` }}</p>
        <p>{{ `${index}_${item.email}` }}</p>
        <p>{{ `${index}_${item.email}` }}</p>
        <p>{{ `${index}_${item.email}` }}</p>
      </div>
    </div>

    <infinite-loading ref="bottom" direction="bottom">
      <div slot="spinner"></div>
      <div slot="no-more">No more message</div>
      <div slot="no-results">No results message</div>
      <div slot="error" slot-scope="{ trigger }">
        Error message, click
        <a href="javascript:;" @click="trigger">here</a> to retry
      </div>
      <!-- <span slot="no-more"></span> -->
    </infinite-loading>

    <input ref="more" type="button" @click="more" value="More" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'

import InfiniteLoading from 'vue-infinite-loading'

import dummy from '~/static/dummy.js'

@Component({
  components: {
    InfiniteLoading,
  },
})
export default class NewsItem extends Vue {
  @Ref() private bottom: any

  private page: number = 0
  private directionData: any[] = []

  more() {
    this.infiniteHandlerBottomScroll(this.bottom.stateChanger)
  }

  mounted() {
    window.addEventListener('scroll', this.detectWindowScrollY)
  }

  beforeDestory() {
    window.removeEventListener('scroll', this.detectWindowScrollY)
  }

  detectWindowScrollY() {
    console.log('>>>>>>>>>>')
  }

  async infiniteHandlerTopScroll($state: any) {
    const size = dummy.length

    console.log('infiniteHandlerTopScroll >>> ', $state)
    setTimeout(() => {
      if (size >= this.page) {
        const data = dummy[this.page]
        this.directionData.push(dummy[this.page])
        this.page += 1
        $state.loaded()
      } else {
        $state.complete()
      }
    }, 1000)
  }

  async infiniteHandlerBottomScroll($state: any) {
    const size = dummy.length
    console.log('infiniteHandlerBottomScroll >>> ', $state)
    setTimeout(() => {
      if (size >= this.page) {
        const data = dummy[this.page]
        this.directionData.unshift(dummy[this.page])
        this.page += 1
        $state.loaded()
      } else {
        $state.complete()
      }
    }, 1000)
  }
}
</script>

<style scoped></style>
