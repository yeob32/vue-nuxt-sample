<template>
  <div>
    <h1>Who Am I ?</h1>
    <p>{{ name }}</p>
    <p>{{ email }}</p>
    <p>{{ phone }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ChildComponent extends Vue {
  @Prop(String) private readonly name: string | undefined
  @Prop({ default: () => [] }) private readonly email?: string[]
  @Prop() private readonly phone!: string[]
}
</script>

<style scoped></style>
