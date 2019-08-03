<template>
  <div class="Product">
    <scroll-snap class="Product-main_images">
      <img
        v-for="(image, index) in item.mainImages"
        :key="index"
        class="Product-main_image"
        :src="image | cdn"
        alt=""
      >
    </scroll-snap>

    <div class="Product-body">
      <p class="Product-desc">
        <router-link :to="`/product/${item.id}`">
          {{ item.productDesc }}
        </router-link>
      </p>

      <p class="Product-price">
        {{ item.productName }}
        {{ amount }}
      </p>

      <p class="Product-collect">
        {{ item.collectCount }} ADDED
        <router-link
          :to="`/product/${item.id}?view=comments`"
          class="Product-collect_link"
        >
          {{ item.commentCount }} COMMENTS
        </router-link>
      </p>

      <my-list
        :item="item"
        class="Product-my_list"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ScrollSnap from '@/components/common/ScrollSnap.vue'
import MyList from '@/components/common/MyList.vue'
import { ProductState } from '@/store/modules/product/types'

type Item = ProductState['item']

@Component({
  components: {
    ScrollSnap,
    MyList,
  },
})
export default class Product extends Vue {
  @Prop(Object)
  item!: Item

  get detailImage() {
    return `${this.item.detailImages[0]}?type=thumb&opt=R680x680.q100`
  }

  get amount() {
    const { amount } = this.item.amounts[0]

    return `$${amount}`
  }
}
</script>

<style scoped>
.Product-body {
  margin-top: 15px;
}

.Product-price {
  margin-top: 5px;
  color: var(--oc-pink-5);
}

.Product-collect {
  font-size: var(--font-12);
  color: var(--oc-gray-6);
}

.Product-collect_link {
  text-decoration: underline;
}

.Product-my_list {
  height: 28px;
  margin-top: 15px;
  font-size: var(--font-12);
}
</style>
