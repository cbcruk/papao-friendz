<template>
  <div class="Paypal">
    <paypal-price :is-footer="true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PaypalPrice from '@/components/Checkout/Order/Price.vue'

@Component({
  components: {
    PaypalPrice,
  },
})
export default class Paypal extends Vue {}
</script>

<style scoped>
.Paypal {
  padding: calc(var(--default-padding) * 2) var(--default-padding);
  background-color: var(--oc-gray-1);
}
</style>
