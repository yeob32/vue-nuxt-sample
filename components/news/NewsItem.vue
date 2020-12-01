<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div>
        <p>{{ `${index}_${item.email}` }}</p>
      </div>
    </div>
    <infinite-loading direction="bottom" @infinite="infiniteHandler">
      <div slot="spinner"></div>
      <div slot="no-more">No more message</div>
      <div slot="no-results">No results message</div>
      <div slot="error" slot-scope="{ trigger }">
        Error message, click
        <a href="javascript:;" @click="trigger">here</a> to retry
      </div>
      <!-- <span slot="no-more"></span> -->
    </infinite-loading>

    <input type="button" @click="more" value="더 보기" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import InfiniteLoading from 'vue-infinite-loading'

import dummy from './dummy'

@Component({
  components: {
    InfiniteLoading,
  },
})
export default class NewsItem extends Vue {
  private page: number = 0
  private list: any[] = []

  async mounted() {
    console.log(dummy)
  }

  more() {}

  async infiniteHandler($state: any) {
    const size = dummy.length

    setTimeout(() => {
      if (size >= this.page) {
        this.page += 1
        this.list.push(dummy[0])
        $state.loaded()
      } else {
        $state.complete()
      }
    }, 1000)

    // dummy.forEach((value, index) => {
    //   setTimeout(() => {
    //     if (size >= this.page) {
    //       this.page += 1
    //       this.list.push(value)
    //       $state.loaded()
    //     } else {
    //       $state.complete()
    //     }
    //   }, 2000)

    //   // if (size >= this.page) {
    //   //   this.page += 1
    //   //   this.list.unshift(value)
    //   //   $state.loaded()
    //   // } else {
    //   //   $state.complete()
    //   // }
    // })
  }
}
</script>

<style scoped></style>
