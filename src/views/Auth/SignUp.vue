<template>
  <div class="Sign">
    <sign-form class="Sign-form" @submit.prevent="onSubmit">
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
          ref="password"
          v-model="form.password"
          v-validate="'required'"
          name="password"
          placeholder="Password"
          type="password"
        />
      </label>

      <label class="Form-row">
        <input
          v-model="form.confirmPassword"
          v-validate="'required|confirmed:password'"
          name="password"
          placeholder="Repeat Password"
          type="password"
        />
      </label>

      <button slot="submit" type="submit" class="button" :disabled="isDisabled">
        CREATE AN ACCOUNT
      </button>
    </sign-form>

    <p class="Sign-terms">
      By creating an account, you agree to <br />
      Kakao Friends
      <router-link to="/help/privacy-policy">
        privacy policy
      </router-link>
      and
      <router-link to="/help/conditions-of-use"> conditions of use </router-link
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import FormMixin from '@/mixins/Form'
import SignForm from '@/components/common/Form.vue'

const authModule = namespace('auth')

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
}

@Component({
  components: {
    SignForm,
  },
})
export default class Sign extends Mixins(FormMixin) {
  @authModule.Action('signUp')
  signUp!: (params: Pick<typeof initialState, 'email' | 'password'>) => void

  form = {
    ...initialState,
  }

  async onSubmit() {
    const response = await this.validateAll()

    if (response) {
      const { email, password } = this.form

      await this.signUp({
        email,
        password,
      })
    }
  }
}
</script>

<style scoped>
.Sign-terms {
  margin-top: 18px;
  text-align: center;
  color: var(--oc-gray-6);
}

.Sign-terms a {
  text-decoration: underline;
}
</style>
