<template>
  <div>
    <h1>Parent Component !</h1>
    <ChildComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildCompnent from '@/components/props/ChildComponent.vue'

@Component({
  middleware: 'auth',
  components: {
    ChildCompnent,
  },
})
export default class ParentComponent extends Vue {}
</script>

<style scoped></style>
