<template>
  <div>
    <h1>CLIENT</h1>
    <span>
      {{ data }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Client extends Vue {
  private data = {}
  async created() {
    try {
      this.data = await this.$axios.$get('/api/users/2')
      // this.data = await this.$axios.$get('/api-test/users/2')
    } catch (e) {
      console.log('client e > ', e)
    }
  }
}
</script>

<style scoped></style>
