<template>
  <div>
    <h1>NAVER MAP</h1>
    <MapContainer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import MapContainer from '@/components/naver-map/MapContainer.vue'

@Component({
  components: {
    MapContainer,
  },
})
export default class Index extends Vue {}
</script>

<style scoped></style>
