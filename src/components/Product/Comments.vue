<template>
  <div class="Comments">
    <div class="Comments-summary">
      <div class="Comments-means">
        <vue-stars
          class="Comments-means_icon"
          :width="ratingSummary.means"
        />
      </div>
      <div class="Comments-total">
        {{ ratingSummary.total }} Comments
      </div>
    </div>

    <div class="Comments-items">
      <product-comment
        v-for="item in comments.items"
        :key="item.id"
        :comment="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import meanBy from 'lodash/meanBy'
import VueStars from '@/components/common/Stars.vue'
import ProductComment from './Comment.vue'
import { ProductState } from '@/store/modules/product/types'

type CommentsType = ProductState['comments']

@Component({
  components: {
    VueStars,
    ProductComment,
  },
})
export default class Comments extends Vue {
  @Prop(Object)
  comments!: CommentsType

  get ratingSummary() {
    const means = meanBy(this.comments.items, 'rating')
    const total = this.comments.items.length

    return {
      means: isNaN(means) ? 0 : means,
      total,
    }
  }
}
</script>

<style scoped>
.Comments-summary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 82px;
  border-radius: 8px;
  background-color: var(--oc-gray-1);
}

.Comments-means_icon {
  width: 94px;
}

.Comments-total {
  margin-top: 2px;
}

.Comments-items {
  margin-top: 10px;
}
</style>
