<template>
  <div class="Error">
    <h1>😵</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Error extends Vue {}
</script>

<style scoped>
.Error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
