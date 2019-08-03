<template>
  <div class="Quantity">
    <form class="Quantity-form" @submit.prevent="onSubmit">
      <div class="Quantity-form_row">
        <button
          type="button"
          class="Quantity-form_button"
          @click="changeQuantity()"
        >
          <icon-minus width="12" />
        </button>

        <label class="Quantity-form_label">
          <input
            v-model="quantity"
            type="number"
            pattern="[0-9]*"
            inputmode="numeric"
            min="1"
            list="defaultQuantity"
            class="Quantity-form_input"
          />
        </label>

        <button
          type="button"
          class="Quantity-form_button"
          @click="changeQuantity(true)"
        >
          <icon-plus width="12" />
        </button>
      </div>

      <div class="Quantity-form_row">
        <button class="Quantity-button Quantity-form_submit" type="submit">
          OK
        </button>
      </div>
    </form>

    <div class="Quantity-form Quantity-form_row Quantity-delete">
      <button
        type="delete"
        class="Quantity-button Quantity-delete_button"
        @click="handleDeleteItem"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconPlus from '@/components/common/Icons/Plus.vue'
import IconMinus from '@/components/common/Icons/Minus.vue'

@Component({
  components: {
    IconPlus,
    IconMinus,
  },
})
export default class Quantity extends Vue {
  @Prop(Number)
  id!: number

  @Prop(Number)
  qa!: number

  @Prop(Function)
  patchItem!: (params: { id: number; quantity: number }) => Promise<void>

  @Prop(Function)
  deleteItem!: (id: number) => Promise<void>

  quantity = this.qa

  changeQuantity(isAdd: boolean) {
    this.quantity = this.quantity + (isAdd ? 1 : -1)
  }

  async handleDeleteItem() {
    await this.deleteItem(this.id)

    this.$emit('close')
  }

  async onSubmit() {
    await this.patchItem({
      id: this.id,
      quantity: this.quantity,
    })

    this.$emit('close')
  }
}
</script>

<style scoped>
.Quantity {
  --radius: 8px;
  --background-color: var(--oc-white);
  --row-height: 57px;
}

.Quantity {
  padding: var(--default-padding);
}

.Quantity-form {
  border-radius: var(--radius);
  background-color: var(--background-color);
}

.Quantity-form_row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: var(--row-height);
}

.Quantity-form_row:not(:first-child) {
  border-top: 1px solid var(--oc-gray-4);
}

.Quantity-form_input {
  border: 0 !important;
  text-align: center;
}

.Quantity-form_input::-webkit-calendar-picker-indicator {
  display: none;
}

.Quantity-form_button {
  border: 0;
  background-color: transparent;
}

.Quantity-form_submit {
  background-color: transparent;
}

.Quantity-delete {
  margin-top: 6px;
}

.Quantity-button {
  border: 0;
  background-color: transparent;
  font-weight: bold;
}
</style>
