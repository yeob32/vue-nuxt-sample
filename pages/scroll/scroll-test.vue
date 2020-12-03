<template>
  <div>
    <Test />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Test from '@/components/news/Test.vue'

@Component({
  components: {
    Test,
  },
})
export default class Index extends Vue {}
</script>

<style scoped></style>
