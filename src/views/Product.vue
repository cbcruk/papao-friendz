<template>
  <div class="Product">
    <product-basic :basic="basic" />

    <div class="Product-body">
      <product-toggle title="DETAILS" :is-open="true">
        <product-details :detail="detail" />
      </product-toggle>

      <product-toggle title="SHIPPING">
        <product-shipping />
      </product-toggle>

      <product-toggle ref="comment" title="COMMENTS" :is-open="isComments">
        <product-comments ref="comments" :comments="comments" />
      </product-toggle>

      <product-toggle title="ADD A COMMENT" :disabled="true" :is-open="true">
        <product-comment-form :id="item.id" />
      </product-toggle>

      <product-toggle title="RECOMMENDED">
        <product-recommended :relation="relation" />
      </product-toggle>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import pick from 'lodash/pick'
import ProductToggle from '@/components/common/Toggle.vue'
import ProductBasic from '@/components/Product/Basic.vue'
import ProductCommentForm from '@/components/Product/CommentForm.vue'
import ProductComments from '@/components/Product/Comments.vue'
import ProductDetails from '@/components/Product/Details.vue'
import ProductRecommended from '@/components/Product/Recommended.vue'
import ProductShipping from '@/components/Product/Shipping.vue'
import { ProductState } from '@/store/modules/product/types'

const productModule = namespace('product')

type Item = ProductState['item']
type Comments = ProductState['comments']
type Relation = ProductState['relation']

@Component({
  components: {
    ProductToggle,
    ProductBasic,
    ProductCommentForm,
    ProductComments,
    ProductDetails,
    ProductRecommended,
    ProductShipping,
  },
})
export default class Product extends Vue {
  @productModule.Action('getItem')
  getItem!: (id: string) => void

  @productModule.Getter('item')
  item!: Item

  @productModule.Getter('comments')
  comments!: Comments

  @productModule.Getter('relation')
  relation!: Relation

  $refs!: {
    comments: Vue
  }

  get basic() {
    return pick(this.item, [
      'id',
      'detailImages',
      'productName',
      'amounts',
      'productDesc',
      'collectCount',
      'checked',
      'isCollected',
    ])
  }

  get detail() {
    return pick(this.item, ['contents'])
  }

  get isComments() {
    return this.$route.query.view === 'comments'
  }

  async mounted() {
    const { id } = this.$route.params

    await this.getItem(id)

    if (this.isComments) {
      this.$refs.comments.$el.scrollIntoView()
    }
  }
}
</script>

<style scoped>
.Product-body {
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
  margin-top: 23px;
}
</style>
