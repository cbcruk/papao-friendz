<template>
  <validation-observer ref="observer" v-slot="{ invalid }" class="Sign">
    <sign-form class="Sign-form" @submit.prevent="onSubmit">
      <validation-provider rules="required|email" tag="label" class="Form-row">
        <input
          v-model="form.email"
          name="email"
          placeholder="Email"
          type="text"
        />
      </validation-provider>

      <validation-provider rules="required" tag="label" class="Form-row">
        <input
          ref="password"
          v-model="form.password"
          name="password"
          placeholder="Password"
          type="password"
        />
      </validation-provider>

      <validation-provider
        rules="required|confirmed:password"
        tag="label"
        class="Form-row"
      >
        <input
          v-model="form.confirmPassword"
          name="password"
          placeholder="Repeat Password"
          type="password"
        />
      </validation-provider>

      <button slot="submit" type="submit" class="button" :disabled="invalid">
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
  </validation-observer>
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
  signUp!: (
    params: Pick<typeof initialState, 'email' | 'password'>,
  ) => Promise<void>

  form = {
    ...initialState,
  }

  async onSubmit() {
    const response = await this.$refs.observer.validate()

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
