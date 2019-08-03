<template>
  <div class="Account">
    <account-toggle title="PROFILE" :is-open="true">
      <account-profile />
    </account-toggle>

    <account-toggle title="CHANGE PASSWORD">
      <account-password />
    </account-toggle>

    <account-toggle title="ORDER HISTORY">
      <account-order :items="items" />
    </account-toggle>

    <h2 class="Account-signout">
      <a @click="signOut">
        SIGN OUT
      </a>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import AccountToggle from '@/components/common/Toggle.vue'
import AccountProfile from '@/components/Account/Profile.vue'
import AccountPassword from '@/components/Account/Password.vue'
import AccountOrder from '@/components/Account/Order.vue'

const authModule = namespace('auth')

@Component({
  components: {
    AccountToggle,
    AccountProfile,
    AccountPassword,
    AccountOrder,
  },
})
export default class Account extends Vue {
  @authModule.Action('signOut')
  signOut!: () => void

  items = []
}
</script>

<style scoped>
.Account {
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
}

.Account-signout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-top: 1px solid var(--oc-gray-4);
}
</style>
