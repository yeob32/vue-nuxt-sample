<template>
  <div>
    <NewsItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import NewsItem from '@/components/news/NewsItem.vue'

@Component({
  components: {
    NewsItem,
  },
})
export default class Index extends Vue {}
</script>

<style scoped></style>
