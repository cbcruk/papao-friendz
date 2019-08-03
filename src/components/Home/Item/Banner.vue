<template>
  <div class="Banner">
    <img
      class="Banner-image"
      :src="item.imageUrl | cdn"
      alt=""
    >
    <p class="Banner-desc">
      {{ item.description }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { BannersState } from '@/store/modules/banners/types'

type BannerType = BannersState['item']

@Component
export default class Banner extends Vue {
  @Prop(Object)
  item!: BannerType
}
</script>

<style scoped>
.Banner-image {
  width: 100%;
}

.Banner-desc {
  margin-top: 10px;
}
</style>
