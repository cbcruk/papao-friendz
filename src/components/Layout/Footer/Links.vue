<template>
  <div class="Links">
    <div class="Links-account">
      <h2 hidden>
        service Link
      </h2>

      <a
        href="https://www.instagram.com/kakaofriends_usa/"
        target="_blank"
        class="Links-account_instagram"
      >
        Follow Us

        <icon-instagram
          width="18"
          height="18"
        />
      </a>

      <span class="Links-account_inside">
        <router-link
          v-if="!hasCustomerInfo"
          to="/auth/signin"
        >
          Sign In
        </router-link>
        <router-link
          v-else
          to="/account"
        >
          Account
        </router-link>

        <router-link to="/help/faq">
          FAQ
        </router-link>
      </span>
    </div>

    <div class="Links-clause">
      <h2 hidden>
        service information
      </h2>
      <router-link to="/help/privacy-policy">
        Privacy Policy
      </router-link>
      <router-link to="/help/conditions-of-use">
        Conditions of Use
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import IconInstagram from '@/components/common/Icons/Instagram.vue'

const customerModule = namespace('customer')

@Component({
  components: {
    IconInstagram,
  },
})
export default class Links extends Vue {
  @customerModule.Getter('hasCustomerInfo')
  hasCustomerInfo!: boolean
}
</script>

<style scoped>
.Links {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--oc-gray-7);
  border-bottom: 1px solid var(--oc-gray-7);
}

.Links a {
  text-decoration: none;
}

[class^='Links-'] {
  display: flex;
  align-items: center;
  height: 50px;
}

.Links-account {
  justify-content: space-between;
}

.Links-account_instagram {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
}

.Links-account a {
  font-weight: bold;
}

.Links-account_inside a:not(:first-child) {
  margin-left: 20px;
}

.Links-clause {
  border-top: 1px solid var(--oc-gray-2);
}

.Links-clause a:not(:first-of-type) {
  margin-left: 16px;
}
</style>
