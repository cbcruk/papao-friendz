<template>
  <inquiry-form class="Inquiry" @submit.prevent="onSubmit">
    <label class="Form-row">
      <input
        v-model="form.email"
        v-validate="'required|email'"
        name="email"
        placeholder="Email"
        type="text"
      />
    </label>

    <label class="Form-row">
      <input
        v-model="form.name"
        v-validate="'required'"
        name="name"
        placeholder="Name"
        type="text"
      />
    </label>

    <label class="Form-row">
      <input
        v-model="form.orderNumber"
        v-validate="'required'"
        name="orderNumber"
        placeholder="Order Number"
        type="text"
      />
    </label>

    <button slot="submit" type="submit" class="button" :disabled="isDisabled">
      SUBMIT
    </button>
  </inquiry-form>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import FormMixin from '@/mixins/Form'
import InquiryForm from '@/components/common/Form.vue'

const orderModule = namespace('order')

@Component({
  components: {
    InquiryForm,
  },
})
export default class Inquiry extends Mixins(FormMixin) {
  @orderModule.Action('getOrderByGuest')
  getOrderByGuest!: () => void

  form = {
    email: '',
    name: '',
    orderNumber: '',
  }

  async onSubmit() {
    const response = await this.validateAll()

    if (response) {
      await this.getOrderByGuest()

      this.$router.push('/order/guest-order-detail')
    }
  }
}
</script>
