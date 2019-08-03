<template>
  <div class="Shipping">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="Shipping-item"
    >
      <h3 class="Shipping-title">
        {{ item.title }}
      </h3>
      <p class="Shipping-desc">
        {{ item.desc }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Shipping extends Vue {
  @Prop({
    type: Array,
    default() {
      return [
        {
          title: 'Shipping time',
          desc: 'Arrives in 5-7 business days',
        },
        {
          title: 'Customs',
          desc:
            'Customs fees, taxes and other expenses are not included in the price of delivery. Payment of these additional expenses is the burden of the buyer upon receiving the package.',
        },
        {
          title: 'Inquiries',
          desc:
            'The global delivery of the entire order may be delayed if even several of the items have not arrived at the delivery location. Please direct all questions about global shipments to the Contact Us service or email support.usa@kakaofriends.com',
        },
      ]
    },
  })
  items!: {
    title: string
    desc: string
  }[]
}
</script>

<style scoped>
.Shipping-item {
  color: var(--oc-gray-7);
}

.Shipping-item:not(:first-child) {
  margin-top: 10px;
}

.Shipping-title {
  font-size: inherit;
  font-weight: bold;
}
</style>
