<template>
  <div class="Agree-fieldset">
    <div class="Agree-fieldset_row">
      <agree-checkbox
        :checked="checkedAll"
        class="Agree-checkbox"
      >
        <input
          slot="input"
          v-model="checkedAll"
          type="checkbox"
        >
        I agree to all terms and conditions.
      </agree-checkbox>
    </div>

    <div class="Agree-fieldset_row">
      <agree-checkbox
        :checked="checked.includes('a')"
        class="Agree-checkbox"
      >
        <input
          slot="input"
          v-model="checked"
          type="checkbox"
          value="a"
        > I agree to the collection of order product and delivery information (Required)
      </agree-checkbox>

      <agree-checkbox
        :checked="checked.includes('b')"
        class="Agree-checkbox"
      >
        <input
          slot="input"
          v-model="checked"
          type="checkbox"
          value="b"
        > I have read the descriptions and conditions for use of the product I’m purchasing and I agree to the cancellation policy. (Required)
      </agree-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AgreeCheckbox from '@/components/common/Checkbox.vue'

@Component({
  components: {
    AgreeCheckbox,
  },
})
export default class Fieldset extends Vue {
  checked: string[] = []

  get checkedAll() {
    return this.checked.length === 2
  }

  set checkedAll(val) {
    this.checked = val ? ['a', 'b'] : []
  }
}
</script>

<style scoped>
.Agree-fieldset {
  border: 1px solid var(--oc-gray-4);
}

.Agree-fieldset_row {
  padding: var(--default-padding);
}

.Agree-fieldset_row:not(:first-child) {
  border-top: 1px solid var(--oc-gray-4);
}

.Agree-checkbox {
  display: grid;
  grid-template-columns: var(--default-padding) 1fr;
  grid-column-gap: 10px;
}

.Agree-checkbox:not(:first-child) {
  margin-top: var(--default-padding);
}
</style>
