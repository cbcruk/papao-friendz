<template>
  <div class="Collection">
    <collection-summary v-bind="{ prices, hasCheckedItems }" />
    <collection-items v-bind="{ items, hasItems }" />

    <modals-container />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import CollectionSummary from '@/components/Collection/Summary.vue'
import CollectionItems from '@/components/Collection/Items.vue'
import { CollectionState, Prices } from '@/store/modules/collection/types'

const collectionModule = namespace('collection')

type Items = CollectionState['items']

@Component({
  components: {
    CollectionSummary,
    CollectionItems,
  },
})
export default class Collection extends Vue {
  @collectionModule.Action('getShippingPrice')
  getShippingPrice!: () => void

  @collectionModule.Action('getStockTaking')
  getStockTaking!: () => void

  @collectionModule.Getter('items')
  items!: Items

  @collectionModule.Getter('hasItems')
  hasItems!: boolean

  @collectionModule.Getter('hasCheckedItems')
  hasCheckedItems!: boolean

  @collectionModule.Getter('prices')
  prices!: Prices

  @Watch('items', { immediate: true })
  onItemsChanged(items: Items) {
    this.getShippingPrice()
    this.getStockTaking()
  }
}
</script>
