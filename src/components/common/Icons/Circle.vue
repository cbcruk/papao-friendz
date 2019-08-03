<template>
  <svg
    aria-hidden="true"
    role="img"
    viewBox="0 0 384 512"
  >
    <path
      d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
    />
  </svg>
</template>

<template>
  <svg
    aria-hidden="true"
    role="img"
    viewBox="0 0 512 512"
  >
    <path
      v-if="isChecked"
      d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
    />
    <path
      v-else
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class IconCircle extends Vue {
  @Prop({
    type: Boolean,
    default: false,
  })
  isChecked!: boolean
}
</script>
