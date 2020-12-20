<template>
  <div>
    <h1>NAVER MAP - Clustering</h1>
    <ClusteringNaverMap />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import ClusteringNaverMap from '@/components/naver-map/ClusteringNaverMap.vue'

@Component({
  components: {
    ClusteringNaverMap,
  },
})
export default class Index extends Vue {}
</script>

<style scoped></style>
