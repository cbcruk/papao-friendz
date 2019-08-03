<template>
  <form
    class="Form"
    v-on="$listeners"
  >
    <div class="Form-body">
      <slot />
    </div>

    <div class="Form-footer">
      <slot name="submit" />
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FormButton from '@/components/common/Button.vue'

@Component({
  components: {
    FormButton,
  },
})
export default class Form extends Vue {
  @Prop(String)
  button!: string
}
</script>

<style scoped>
.Form {
  color: var(--oc-gray-6);
}

.Form >>> .Form-row {
  display: block;
}

.Form >>> .Form-row:not(:first-of-type) {
  margin-top: 8px;
}

.Form-footer {
  margin-top: 25px;
}

.Form-footer >>> .button {
  width: 100%;
}
</style>
