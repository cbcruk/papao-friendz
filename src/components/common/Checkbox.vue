<template>
  <label
    :class="{
      'Checkbox': true,
      'is-checked': checked
    }"
  >
    <div class="Checkbox_outline">
      <icon-check
        width="8"
        fill="var(--oc-white)"
      />
    </div>

    <slot name="input" />

    <span class="Checkbox-slot">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconCheck from '@/components/common/Icons/Check.vue'

@Component({
  components: {
    IconCheck,
  },
})
export default class Checkbox extends Vue {
  @Prop(Boolean)
  checked!: boolean
}
</script>

<style scoped>
.Checkbox {
  --size: 16px;
}

.Checkbox {
  display: block;
  position: relative;
}

.Checkbox >>> input[type='checkbox'] {
  position: absolute;
  left: 0;
  opacity: 0;
}

.Checkbox_outline {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border: 1px solid var(--oc-gray-4);
  border-radius: 50%;
}

.Checkbox.is-checked .Checkbox_outline {
  border: 0;
  background-color: var(--oc-gray-7);
}
</style>
