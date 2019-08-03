import { Component, Vue } from 'vue-property-decorator'
import mapValues from 'lodash/mapValues'

@Component
export default class Form extends Vue {
  get isEveryDirty() {
    return this.$validator.fields.items.every(item => item.flags.dirty)
  }

  get hasError() {
    return this.$validator.errors.any()
  }

  get isDisabled() {
    return !this.isEveryDirty || this.hasError
  }

  validateAll() {
    return this.$validator.validateAll()
  }

  reset() {
    return this.$validator.reset()
  }
}
