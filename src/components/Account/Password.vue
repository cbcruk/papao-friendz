<template>
  <div class="Password">
    <form
      ref="form"
      class="Password-form"
      @submit.prevent="onSubmit"
    >
      <password-input
        label="Current Password"
        :error="errors.first('oldPassword')"
      >
        <input
          v-model="form.oldPassword"
          v-validate="'required'"
          name="oldPassword"
          type="password"
        >
      </password-input>

      <password-input
        label="New Password"
        :error="errors.first('newPassword')"
      >
        <input
          ref="newPassword"
          v-model="form.newPassword"
          v-validate="'required|min:6'"
          name="newPassword"
          type="password"
        >
      </password-input>

      <password-input
        label="Repeat New Password"
        :error="errors.first('repeat')"
      >
        <input
          v-model="form.confirmPassword"
          v-validate.bails="'required|confirmed:newPassword'"
          name="confirmPassword"
          type="password"
        >
      </password-input>

      <password-button
        type="submit"
        :disabled="isDisabled"
        class="Password-submit"
      >
        Change Password
      </password-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator'
import mapValues from 'lodash/mapValues'
import { POST } from '@/api/http'
import FormMixin from '@/mixins/Form'
import PasswordInput from '@/components/common/Input.vue'
import PasswordButton from '@/components/common/Button.vue'

type Form = {
  [key: string]: string
}

@Component({
  components: {
    PasswordInput,
    PasswordButton,
  },
})
export default class Password extends Mixins(FormMixin) {
  form: Form = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  async onSubmit() {
    const response = await this.validateAll()

    if (response) {
      await POST('/customer/change-password', this.form)

      this.form = mapValues(this.form, () => '')
      this.$validator.reset()
    }
  }
}
</script>

<style scoped>
.Password-submit {
  margin-top: 20px;
}
</style>
