<template>
  <div class="Media">
    <img class="Media-image">
    <div class="Media-body">
      <slot name="body" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Media extends Vue {}
</script>
