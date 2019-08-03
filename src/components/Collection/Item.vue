<template>
  <div class="Item">
    <slot
      name="before"
      :item="item"
    />

    <img
      class="Item-image"
      :src="item.thumbnail | cdn"
      alt=""
    >

    <div class="Item-body">
      <p class="Item-name">
        {{ item.productName }}
      </p>
      <p class="Item-desc">
        ${{ item.amounts[0].amount }}
        <slot name="quantity">
          X {{ item.quantity }}
        </slot>
      </p>
    </div>

    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Collection } from '@/store/modules/collection/types'

@Component
export default class Item extends Vue {
  @Prop(Object)
  item!: Collection
}
</script>

<style scoped>
.Item {
  position: relative;
  display: flex;
  align-items: center;
}

.Item:not(:first-child) {
  padding-top: 12px;
  border-top: 1px solid var(--oc-gray-4);
  margin-top: 12px;
}

.Item-image {
  width: 85px;
}

.Item-body {
  margin-left: 10px;
}

.Item-desc {
  margin-top: 3px;
  color: var(--oc-gray-6);
}
</style>
