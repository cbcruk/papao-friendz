import { Component, Vue } from 'vue-property-decorator'
import { ValidationObserver } from 'vee-validate'

@Component
export default class Form extends Vue {
  $refs!: {
    observer: InstanceType<typeof ValidationObserver>
  }
}
