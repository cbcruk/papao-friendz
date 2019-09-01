<template>
  <div class="Items">
    <template v-if="hasItems">
      <collection-item v-for="item in items" :key="item.id" :item="item">
        <item-checkbox
          slot="before"
          :checked="item.checked"
          class="Item-checkbox"
        >
          <input slot="input" type="checkbox" @change="onChange(item)" />
        </item-checkbox>

        <item-trigger
          :id="item.productSubId"
          slot="after"
          :qa="item.quantity"
          :patch-item="patchItem"
          :delete-item="deleteItem"
        />
      </collection-item>
    </template>
    <template v-else>
      <p class="NoItem">
        There is no item added
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ItemCheckbox from '@/components/common/Checkbox.vue'
import CollectionItem from './Item.vue'
import ItemTrigger from './Item/Trigger.vue'
import { Collection } from '@/store/modules/collection/types'

const collectionModule = namespace('collection')

@Component({
  components: {
    CollectionItem,
    ItemCheckbox,
    ItemTrigger,
  },
})
export default class Items extends Vue {
  @Prop(Array)
  items!: Collection[]

  @Prop(Boolean)
  hasItems!: boolean

  @collectionModule.Action('patchItem')
  patchItem!: (params: { id: number; checked: boolean }) => Promise<void>

  @collectionModule.Action('deleteItem')
  deleteItem!: () => Promise<void>

  async onChange(item: Collection) {
    const { productSubId: id, checked } = item

    await this.patchItem({
      id,
      checked: !checked,
    })
  }
}
</script>

<style scoped>
.Items {
  padding-top: 12px;
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
  border-top: 1px solid var(--oc-gray-2);
}

.Item-checkbox {
  margin-right: 15px;
}

.NoItem {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 325px;
}
</style>
