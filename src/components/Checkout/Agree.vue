<template>
  <checkout-step
    order="4"
    title="AGREE TO TERMS & CONDITION"
  >
    <div class="Agree">
      <agree-fieldset class="Agree-fieldset" />
      <agree-terms class="Agree-terms" />
    </div>
  </checkout-step>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CheckoutStep from './Step.vue'
import AgreeFieldset from './Agree/Fieldset.vue'
import AgreeTerms from './Agree/Terms.vue'

@Component({
  components: {
    CheckoutStep,
    AgreeFieldset,
    AgreeTerms,
  },
})
export default class Agree extends Vue {}
</script>

<style scoped>
.Agree-terms {
  margin-top: 30px;
}
</style>
