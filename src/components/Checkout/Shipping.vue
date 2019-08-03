<template>
  <checkout-step
    order="2"
    title="SHIPPING ADDRESS"
  >
    <shipping-profile />
  </checkout-step>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import CheckoutStep from './Step.vue'
import ShippingProfile from '@/components/Account/Profile.vue'

@Component({
  components: {
    CheckoutStep,
    ShippingProfile,
  },
})
export default class Shipping extends Vue {}
</script>
