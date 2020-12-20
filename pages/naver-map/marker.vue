<template>
  <div>
    <h1>Naver Map - Marker Overlapping Recognizer</h1>
    <MarkerRecognizer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import MarkerRecognizer from '@/components/naver-map/MarkerRecognizer.vue'

@Component({
  components: {
    MarkerRecognizer,
  },
})
export default class Marker extends Vue {}
</script>

<style scoped></style>
