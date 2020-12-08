<template>
  <div>
    <h1>SERVER</h1>
    <span>
      {{ data }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  async asyncData({ app }) {
    try {
      // const res = await ctx.$axios.$get('https://reqres.in/api/users/2')
      // const res = await ctx.$axios.$get('/api/users/2')
      const res = await app.$axios.$get('/api-test/users/2')
      console.log('res > ', res)
      return {
        data: res,
      }
    } catch (e) {
      console.log('e > ', e)
    }
  },
})
export default class Index extends Vue {
  private data = {}
}
</script>

<style scoped></style>
