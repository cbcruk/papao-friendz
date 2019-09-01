<template>
  <div class="Password">
    <validation-observer
      tag="form"
      class="Password-form"
      @submit.prevent="onSubmit"
      v-slot="{ invalid }"
    >
      <validation-provider
        name="Current Password"
        rules="required"
        v-slot="{ errors }"
      >
        <password-input label="Current Password" :error="errors[0]">
          <input
            v-model="form.oldPassword"
            name="oldPassword"
            type="password"
          />
        </password-input>
      </validation-provider>

      <validation-provider
        name="New Password"
        vid="newPassword"
        rules="required|min:6"
        v-slot="{ errors }"
      >
        <password-input label="New Password" :error="errors[0]">
          <input
            ref="newPassword"
            v-model="form.newPassword"
            name="newPassword"
            type="password"
          />
        </password-input>
      </validation-provider>

      <validation-provider
        name="Repeat New Password"
        rules="required|confirmed:newPassword"
        v-slot="{ errors }"
      >
        <password-input label="Repeat New Password" :error="errors[0]">
          <input
            v-model="form.confirmPassword"
            name="confirmPassword"
            type="password"
          />
        </password-input>
      </validation-provider>

      <password-button
        type="submit"
        :disabled="invalid"
        class="Password-submit"
      >
        Change Password
      </password-button>
    </validation-observer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Mixins } from 'vue-property-decorator'
import mapValues from 'lodash/mapValues'
import { POST } from '@/api/http'
import FormMixin from '@/mixins/Form'
import PasswordInput from '@/components/common/Input.vue'
import PasswordButton from '@/components/common/Button.vue'

@Component({
  components: {
    PasswordInput,
    PasswordButton,
  },
})
export default class Password extends Mixins(FormMixin) {
  form: {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  } = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  async onSubmit() {
    const isValid = await this.$refs.observer.validate()

    if (isValid) {
      await POST('/customer/change-password', this.form)

      this.form = mapValues(this.form, () => '')

      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>

<style scoped>
.Password-submit {
  margin-top: 20px;
}
</style>
