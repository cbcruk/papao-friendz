<template>
  <validation-observer
    ref="observer"
    tag="div"
    class="Password"
    v-slot="{ invalid }"
  >
    <password-form class="Password-form" @submit.prevent="onSubmit">
      <validation-provider rules="required|email" tag="label" class="Form-row">
        <input
          v-model="form.email"
          name="email"
          placeholder="Email"
          type="email"
        />
      </validation-provider>

      <button
        slot="submit"
        type="submit"
        class="button"
        :disabled="form.email && invalid"
      >
        SEND EMAIL
      </button>
    </password-form>

    <div class="Password-footer">
      <router-link to="/auth/signin" class="button is-outline">
        SIGN IN
      </router-link>
    </div>
  </validation-observer>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator'
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
  forgotPassword!: (params: typeof initialState) => Promise<void>

  form = {
    ...initialState,
  }

  async onSubmit() {
    const isValid = await this.$refs.observer.validate()

    if (isValid) {
      await this.forgotPassword(this.form)

      const answer = confirm(
        'We have sent your temporary password to the email address you entered.',
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
