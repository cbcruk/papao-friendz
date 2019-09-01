<template>
  <div class="Faq">
    <faq-toggle v-for="item in items" :key="item.id" :title="item.subject">
      {{ item.content }}
    </faq-toggle>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import FaqToggle from '@/components/common/Toggle.vue'
import { FaqState } from '@/store/modules/faq/types'

const faqModule = namespace('faq')

type Items = FaqState['items']

@Component({
  components: {
    FaqToggle,
  },
})
export default class Faq extends Vue {
  @faqModule.Getter('items')
  items!: Items

  @faqModule.Action('getItems')
  getItems!: () => Promise<void>

  async mounted() {
    await this.getItems()
  }
}
</script>

<style scoped>
.Faq {
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
}
</style>
