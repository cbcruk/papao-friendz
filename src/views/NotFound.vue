<template>
  <div class="NotFound">
    <div class="NotFound-main">
      <img
        src="./NotFound/char.png"
        alt=""
        class="NotFound-image"
      >
      <h1 class="NotFound-title">
        YOU JUST GOT 404’D
      </h1>
      <p class="NotFound-desc">
        The page you are looking for does not exist.
      </p>
    </div>

    <router-link
      to="/"
      :class="{
        'NotFound-button': true,
        'button': true
      }"
    >
      Back to Home
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>

<style scoped>
.NotFound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: calc(var(--default-padding) * 2);
}

.NotFound-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.NotFound-image {
  width: 160px;
}

.NotFound-title {
  margin-top: 24px;
  font-size: var(--font-22);
}

.NotFound-desc {
  color: var(--oc-gray-6);
  margin-top: 8px;
}

.NotFound-button {
  width: 100%;
}
</style>
