<template>
  <div class="Sign">
    <sign-form class="Sign-form" @submit.prevent="onSubmit">
      <label class="Form-row">
        <input
          v-model="form.email"
          v-validate="'required|email'"
          name="email"
          placeholder="Email"
          type="email"
        />
      </label>

      <label class="Form-row">
        <input
          v-model="form.password"
          v-validate="'required|min:6'"
          name="password"
          placeholder="Password"
          type="password"
        />
      </label>

      <div class="Sign-form_etc">
        <label class="Sign-form_remeber">
          <input type="checkbox" /> Remember me
        </label>

        <router-link to="/auth/forgot-password">
          Forgot password?
        </router-link>
      </div>

      <button slot="submit" type="submit" class="button" :disabled="isDisabled">
        SIGN IN
      </button>
    </sign-form>

    <div class="Sign-footer">
      <div class="Sign-footer_row">
        <router-link class="button is-outline" to="/auth/guest-order-inquiry">
          GUEST CHECKOUT INQUERY
        </router-link>
      </div>

      <div class="Sign-footer_row">
        <router-link class="button is-outline" to="/auth/signup">
          CREATE AN ACCOUNT
        </router-link>
      </div>
    </div>
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
}

@Component({
  components: {
    SignForm,
  },
})
export default class Sign extends Mixins(FormMixin) {
  @authModule.Action('signIn')
  signIn!: (params: typeof initialState) => void

  form = {
    ...initialState,
  }

  async onSubmit() {
    const response = await this.validateAll()

    if (response) {
      this.signIn(this.form)
    }
  }
}
</script>

<style scoped>
.Sign {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.Sign-form_etc {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.Sign-form_remeber {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 5px;
  align-items: center;
}

.Sign-footer_row:not(:first-child) {
  padding-top: 20px;
  border-top: 1px solid var(--oc-gray-4);
  margin-top: 20px;
}
</style>
