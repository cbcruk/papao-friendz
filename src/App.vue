<template>
  <div id="app" class="App">
    <layout-header v-if="!isShowHeader" />

    <main class="App-body">
      <router-view />
    </main>

    <layout-footer v-if="!isShowFooter" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import LayoutHeader from '@/components/Layout/Header.vue'
import LayoutFooter from '@/components/Layout/Footer.vue'
import 'open-color/open-color.css'
import '@/assets/styles/variables.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/module.css'

const customerModule = namespace('customer')

@Component({
  components: {
    LayoutHeader,
    LayoutFooter,
  },
})
export default class App extends Vue {
  @customerModule.Action('getInfo')
  getCustomerInfo!: () => void

  get isShowHeader() {
    return this.$route.matched.some(m => m.meta.header === false)
  }

  get isShowFooter() {
    return this.$route.matched.some(m => m.meta.footer === false)
  }

  mounted() {
    this.getCustomerInfo()
  }
}
</script>

<style scoped>
.App {
  min-height: 100vh;
  font-size: var(--font-14);
}

.App >>> .Footer {
  margin-top: 60px;
}
</style>
