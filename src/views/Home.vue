<template>
  <div class="Home">
    <home-items :items="productsWithCollect" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { ProductsState } from '@/store/modules/products/types'
import HomeItems from '@/components/Home/Items.vue'

const productsModule = namespace('products')

type Items = ProductsState['items']

@Component({
  components: {
    HomeItems,
  },
})
export default class Home extends Vue {
  @productsModule.Action('getItems')
  getProducts!: () => void

  @productsModule.Getter('itemsWithCollect')
  productsWithCollect!: Items

  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped>
.Home {
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
}
</style>
