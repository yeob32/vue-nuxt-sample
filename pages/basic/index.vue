<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ParentComponent from '@/components/props/ParentComponent.vue'

@Component({
  middleware: 'auth',
  components: {
    ParentComponent,
  },
})
export default class Index extends Vue {}
</script>

<style scoped></style>
