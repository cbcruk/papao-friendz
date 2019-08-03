<script lang="tsx">
import { VNode } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import ItemProduct from './Item/Product.vue'
import ItemBanner from './Item/Banner.vue'
import { Banner } from '@/store/modules/banners/types'
import { Product } from '@/store/modules/product/types'

type Item = Banner | Product

@Component({
  components: {
    ItemProduct,
    ItemBanner,
  },
})
export default class Items extends Vue {
  @Prop(Array)
  items!: Item[]

  render(h: () => VNode) {
    return (
      <div class="Items">
        {this.items.map(item => {
          const isBanner = item.type === 'banner'

          return isBanner ? (
            <item-banner item={item} />
          ) : (
            <item-product item={item} />
          )
        })}
      </div>
    )
  }
}
</script>

<style scoped>
.Items {
  display: flex;
  flex-direction: column;
}

.Items > *:not(:first-child) {
  margin-top: 40px;
}
</style>
