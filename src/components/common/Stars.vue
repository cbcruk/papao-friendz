<template>
  <svg
    aria-hidden="true"
    role="img"
    viewBox="0 0 2880 512"
    class="Stars"
  >
    <defs>
      <path
        id="star-s"
        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      />
      <path
        id="star-r"
        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
      />

      <clipPath
        v-for="type in ['r', 's']"
        :id="`stars-${type}`"
        :key="type"
      >
        <use :xlink:href="`#star-${type}`" />
        <use
          :xlink:href="`#star-${type}`"
          x="20%"
        />
        <use
          :xlink:href="`#star-${type}`"
          x="40%"
        />
        <use
          :xlink:href="`#star-${type}`"
          x="60%"
        />
        <use
          :xlink:href="`#star-${type}`"
          x="80%"
        />
      </clipPath>
    </defs>

    <rect
      class="Stars-frame"
      clip-path="url(#stars-r)"
    />

    <rect
      class="Stars-value"
      clip-path="url(#stars-s)"
      :width="`${width}%`"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Stars extends Vue {
  @Prop(Number)
  width!: number
}
</script>

<style scoped>
[class^='Stars-'] {
  fill: var(--oc-black);
}

.Stars-frame {
  width: 100%;
  height: 100%;
}
</style>
