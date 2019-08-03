<template>
  <button
    type="button"
    :class="{
      MyList: true,
      button: true,
      'is-outline': true,
      'is-active': item.checked,
    }"
    @click="onList"
  >
    <icon-heart
      class="MyList-icon"
      width="12"
      :fill="`var(--oc-${item.checked ? 'white' : 'black'})`"
      :is-checked="item.checked"
    />
    My list
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import IconHeart from '@/components/common/Icons/Heart.vue'
import { Product } from '@/store/modules/product/types'

const collectionModule = namespace('collection')

@Component({
  components: {
    IconHeart,
  },
})
export default class MyList extends Vue {
  @Prop(Object)
  item!: Product

  @collectionModule.Action('addItem')
  addItem!: (params: { id: number; from: string }) => void

  @collectionModule.Action('patchItem')
  patchItem!: (params: { id: number; checked: boolean }) => void

  onList() {
    const { name: from = '' } = this.$route
    const { isCollected, checked, id } = this.item

    if (isCollected) {
      this.patchItem({
        id,
        checked: !checked,
      })
    } else {
      this.addItem({ id, from })
    }
  }
}
</script>

<style scoped>
.MyList {
  display: flex;
  align-items: center;
  line-height: 1;
}

.MyList.is-active {
  background-color: var(--oc-pink-5);
  border: 1px solid var(--oc-pink-5);
  color: var(--oc-white);
}

.MyList-icon {
  margin-right: 5px;
}
</style>
