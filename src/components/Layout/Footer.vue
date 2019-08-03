<template>
  <footer class="Footer">
    <footer-links />
    <footer-copyright />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FooterLinks from './Footer/Links.vue'
import FooterCopyright from './Footer/Copyright.vue'

@Component({
  components: {
    FooterLinks,
    FooterCopyright,
  },
})
export default class Footer extends Vue {}
</script>

<style scoped>
.Footer {
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
  font-size: var(--font-12);
}
</style>
