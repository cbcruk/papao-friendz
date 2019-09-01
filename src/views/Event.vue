<template>
  <div class="Event">
    <img :src="item.imageUrl | cdn" alt="" class="Event-image" />

    <div class="Event-body">
      <h1 hidden class="Event-title">
        {{ item.subject }}
      </h1>

      <div class="Event-desc" v-html="item.content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace, Getter } from 'vuex-class'
import { Banner } from '@/store/modules/banners/types'

const bannerModule = namespace('banners')

@Component
export default class Event extends Vue {
  @bannerModule.Action('getItem')
  getItem!: (id: number) => Promise<void>

  @bannerModule.Action('setItem')
  setItem!: (id: number) => void

  @bannerModule.Getter('item')
  item!: Banner

  @bannerModule.Getter('findItemById')
  findItemById!: (id: number) => Banner

  get id() {
    return this.$route.params.id
  }

  async mounted() {
    const id = parseInt(this.id, 10)
    const item = this.findItemById(id)

    if (item) {
      this.setItem(id)
    } else {
      await this.getItem(id)
    }
  }
}
</script>

<style scoped>
.Event-body {
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
  margin-top: 24px;
}

.Event-image {
  width: 100%;
}

.Event-desc {
  text-align: center;
}
</style>
