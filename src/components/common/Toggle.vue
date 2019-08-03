<template>
  <div
    :class="{
      Toggle: true,
      'is-open': isOpened,
    }"
  >
    <h2 class="Toggle-title" @click="toggle">
      {{ title }}

      <icon-angle-vertical v-if="!disabled" :is-up="isOpened" width="12" />
    </h2>

    <div class="Toggle-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconAngleVertical from '@/components/common/Icons/AngleVertical.vue'

@Component({
  components: {
    IconAngleVertical,
  },
})
export default class Toggle extends Vue {
  @Prop(String)
  title!: string

  @Prop(Boolean)
  isOpen!: boolean

  @Prop(Boolean)
  disabled!: boolean

  isOpened = Boolean(this.isOpen)

  toggle() {
    if (this.disabled) {
      return
    }

    this.isOpened = !this.isOpened
  }
}
</script>

<style scoped>
.Toggle {
  overflow: hidden;
}

.Toggle:not(:first-of-type) {
  border-top: 1px solid var(--oc-gray-4);
}

.Toggle-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.Toggle-body {
  height: 0;
}

.Toggle.is-open .Toggle-body {
  height: auto;
  padding-bottom: 20px;
}
</style>
