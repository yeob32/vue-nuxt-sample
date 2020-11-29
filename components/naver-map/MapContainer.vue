<template>
  <div>
    <h2>Naver Map Container</h2>
    <ClusteringNaverMap />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ClusteringNaverMap from './ClusteringNaverMap.vue'

@Component({
  components: {
    ClusteringNaverMap,
  },
})
export default class MapContainer extends Vue {}
</script>

<style scoped></style>
