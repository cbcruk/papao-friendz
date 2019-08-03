<template>
  <div class="Basic">
    <div class="Basic-header">
      <img
        :src="detailImage | cdn"
        class="Basic-detail_image"
        alt=""
      >
      <p class="Basic-collect_count">
        {{ basic.collectCount }} ADDED
      </p>
    </div>

    <div class="Basic-body">
      <h1 class="Basic-product_name">
        {{ basic.productName }}
      </h1>
      <p class="Basic-amount">
        {{ amount }}
      </p>
      <p class="Basic-product_desc">
        {{ basic.productDesc }}
      </p>

      <div class="Basic-purchase">
        <my-list
          :item="basic"
          class="Basic-button"
        />

        <button
          :class="{
            'Basic-button': true,
            button: true,
            'is-outline': true,
          }"
          type="button"
        >
          <icon-bag />
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconBag from '@/components/common/Icons/Bag.vue'
import MyList from '@/components/common/MyList.vue'
import { Product } from '@/store/modules/product/types'

@Component({
  components: {
    IconBag,
    MyList,
  },
})
export default class Basic extends Vue {
  @Prop(Object)
  basic!: Product

  get detailImage() {
    if (this.basic.detailImages) {
      return this.basic.detailImages[0]
    }

    return ''
  }

  get amount() {
    if (this.basic.amounts) {
      return `$${this.basic.amounts[0].amount}`
    }

    return ''
  }
}
</script>

<style scoped>
.Basic-header {
  position: relative;
  padding-top: 100%;
}

.Basic-detail_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.Basic-collect_count {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 12px;
  right: 12px;
  height: 28px;
  padding: 0 calc(10 / 16 * 1rem);
  border-radius: 14px;
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-size: var(--font-12);
  font-weight: bold;
  color: var(--oc-white);
}

.Basic-body {
  display: flex;
  flex-direction: column;
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
  margin-top: 25px;
  text-align: center;
}

.Basic-product_name {
  font-size: var(--font-19);
  font-weight: bold;
}

.Basic-amount {
  margin-top: 5px;
}

.Basic-product_desc {
  margin-top: 8px;
  color: var(--oc-gray-7);
}

.Basic-purchase {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6px;
  margin-top: 25px;
}

.Basic-button {
  height: 40px;
}

.Basic-button >>> .Icon {
  width: 14px;
  margin-right: 5px;
}
</style>
