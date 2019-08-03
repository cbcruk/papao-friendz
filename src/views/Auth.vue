<template>
  <div class="Auth">
    <div class="Auth-header">
      <auth-ryan width="26" />
      <h1 class="Auth-title">
        {{ $route.meta.title }}
      </h1>
    </div>

    <div class="Auth-body">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthRyan from '@/components/SignIn/Ryan.vue'

@Component({
  components: {
    AuthRyan,
  },
})
export default class Auth extends Vue {}
</script>

<style scoped>
.Auth {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: var(--default-padding) calc(var(--default-padding) * 2);
}

.Auth-header {
  padding-top: 50px;
  text-align: center;
}

.Auth-title {
  margin-top: 18px;
  font-size: var(--font-22);
}

.Auth-body {
  flex: 1;
  margin-top: 70px;
}
</style>
