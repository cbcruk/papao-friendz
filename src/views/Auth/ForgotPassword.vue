<template>
  <div class="Password">
    <password-form class="Password-form" @submit.prevent="onSubmit">
      <label class="Form-row">
        <input
          v-model="form.email"
          v-validate="'required|email'"
          name="email"
          placeholder="Email"
          type="email"
        />
      </label>

      <button slot="submit" type="submit" class="button" :disabled="isDisabled">
        SEND EMAIL
      </button>
    </password-form>

    <div class="Password-footer">
      <router-link to="/auth/signin" class="button is-outline">
        SIGN IN
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import FormMixin from '@/mixins/Form'
import PasswordForm from '@/components/common/Form.vue'

const authModule = namespace('auth')

const initialState = {
  email: '',
}

@Component({
  components: {
    PasswordForm,
  },
})
export default class Password extends Mixins(FormMixin) {
  @authModule.Action('forgotPassword')
  forgotPassword!: (params: typeof initialState) => void

  form = {
    ...initialState,
  }

  async onSubmit() {
    const response = this.validateAll()

    if (response) {
      await this.forgotPassword(this.form)

      const answer = confirm(
        'We have sent your temporary password to the email address you entered.'
      )

      if (answer) {
        this.$router.push('/auth/signin')
      }
    }
  }
}
</script>

<style scoped>
.Password {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
