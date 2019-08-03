<template>
  <div class="Trigger">
    <button class="Trigger-button" @click="handleModal(id)">
      <icon-ellipsis width="3.6" fill="var(--oc-gray-4)" />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconEllipsis from '@/components/common/Icons/Ellipsis.vue'
import Quantity from './Quantity.vue'

@Component({
  components: {
    IconEllipsis,
    Quantity,
  },
})
export default class Trigger extends Vue {
  @Prop(Number)
  id!: number

  @Prop(Number)
  qa!: number

  @Prop(Function)
  patchItem!: () => void

  @Prop(Function)
  deleteItem!: () => void

  handleModal() {
    this.$modal.show(
      Quantity,
      {
        id: this.id,
        qa: this.qa,
        patchItem: this.patchItem,
        deleteItem: this.deleteItem,
      },
      {
        classes: '',
        adaptive: true,
        height: 'auto',
        pivotY: 1,
      }
    )
  }
}
</script>

<style scoped>
.Trigger-button {
  position: absolute;
  top: 12px;
  right: 0;
  border: 0;
  background-color: transparent;
}
</style>
