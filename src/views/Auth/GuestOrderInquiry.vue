<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <inquiry-form class="Inquiry" @submit.prevent="onSubmit">
      <validation-provider rules="required|email" tag="label" class="Form-row">
        <input
          v-model="form.email"
          name="email"
          placeholder="Email"
          type="text"
        />
      </validation-provider>

      <validation-provider rules="required" tag="label" class="Form-row">
        <input v-model="form.name" name="name" placeholder="Name" type="text" />
      </validation-provider>

      <validation-provider rules="required" tag="label" class="Form-row">
        <input
          v-model="form.orderNumber"
          name="orderNumber"
          placeholder="Order Number"
          type="text"
        />
      </validation-provider>

      <button slot="submit" type="submit" class="button" :disabled="invalid">
        SUBMIT
      </button>
    </inquiry-form>
  </validation-observer>
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
  getOrderByGuest!: () => Promise<void>

  form = {
    email: '',
    name: '',
    orderNumber: '',
  }

  async onSubmit() {
    const isValid = await this.$refs.observer.validate()

    if (isValid) {
      await this.getOrderByGuest()

      this.$router.push('/order/guest-order-detail')
    }
  }
}
</script>
