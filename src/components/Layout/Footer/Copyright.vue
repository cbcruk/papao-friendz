<template>
  <div class="Copyright">
    <p>Copyright © Kakao IX Corp.</p>
    <span>KAKAO FRIENDS</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Copyright extends Vue {}
</script>

<style scoped>
.Copyright {
  --padding: 20px;
}

.Copyright {
  display: flex;
  justify-content: space-between;
  padding-top: var(--padding);
  padding-bottom: var(--padding);
}
</style>
