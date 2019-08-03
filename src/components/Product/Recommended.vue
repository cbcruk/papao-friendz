<template>
  <div class="Recommended">
    <div
      v-for="item in relation"
      :key="item.id"
      class="RecommendedItem"
    >
      <img
        :src="item.detailImages[0] | cdn"
        class="RecommendedItem-detail_image"
        alt=""
      >
      <p class="RecommendedItem-product_name">
        {{ item.productName }}
      </p>
      <p class="RecommendedItem-amount">
        ${{ item.amounts[0].amount }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Relation } from '@/store/modules/product/types'

@Component
export default class Recommended extends Vue {
  @Prop(Array)
  relation!: Relation
}
</script>

<style scoped>
.Recommended {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}

.RecommendedItem-detail_image {
  width: 100%;
}

.RecommendedItem-product_name {
  margin-top: 8px;
}

.RecommendedItem-amount {
  margin-top: 5px;
  color: var(--oc-pink-5);
}
</style>
