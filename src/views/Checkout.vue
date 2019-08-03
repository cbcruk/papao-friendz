<template>
  <div class="Checkout">
    <checkout-order />
    <checkout-shipping />
    <checkout-payment-method />
    <checkout-agree />
    <checkout-paypal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import CheckoutOrder from '@/components/Checkout/Order.vue'
import CheckoutShipping from '@/components/Checkout/Shipping.vue'
import CheckoutPaymentMethod from '@/components/Checkout/Payment.vue'
import CheckoutAgree from '@/components/Checkout/Agree.vue'
import CheckoutPaypal from '@/components/Checkout/Paypal.vue'

const orderModule = namespace('order')

@Component({
  components: {
    CheckoutOrder,
    CheckoutShipping,
    CheckoutPaymentMethod,
    CheckoutAgree,
    CheckoutPaypal,
  },
})
export default class Checkout extends Vue {
  @orderModule.Getter('hasItems')
  hasItems!: boolean

  beforeMount() {
    if (!this.hasItems) {
      this.$router.push('/')
    }
  }
}
</script>
