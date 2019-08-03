<template>
  <div class="Terms">
    <h3 class="Terms-title">
      <icon-exclamation
        width="12"
        height="12"
        fill="var(--oc-gray-7)"
      /> Check before ordering!
    </h3>

    <div class="Terms-body">
      <p>
        You have opted for our global shipping service, meaning that you can only cancel your purchase when you are at the “order received” stage. Once your order has proceeded to any of the following stages of shipment, then as a rule you will not be eligible for exchanges, cancellations or returns. Exceptions are made when your product has a defect and an exchange is approved by the company.
      </p>
      <p>
        To request an exchange because of a flaw in the product, please use the Contact Us or email support.usa@kakaofriends.com, accompanying your request with documented evidence of the product defect.
      </p>
      <p>
        If the delivery is automatically sent back due to issues with overseas customs clearance, an incorrect address, or because the receiver rejected the item, the return will be attributed to buyer negligence and any additional shipping fees will become the burden of the buyer. In addition, the recipient of the item must bear the burden of any customs fees and taxes imposed on products sent through the global shipping service, whatever the fees and taxes may be, depending on the destination country.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconExclamation from '@/components/common/Icons/Exclamation.vue'

@Component({
  components: {
    IconExclamation,
  },
})
export default class Terms extends Vue {}
</script>

<style scoped>
.Terms {
  font-size: var(--font-12);
  line-height: calc(18 / var(--font) * 1rem);
  color: var(--oc-gray-7);
}

.Terms-body {
  margin-top: 10px;
}

.Terms-body p:not(:first-of-type) {
  margin-top: 20px;
}

.Terms-title {
  font-weight: normal;
}
</style>
