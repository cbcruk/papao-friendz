<template>
  <form class="Form" @submit.prevent="onSubmit">
    <fieldset class="Form-fieldset">
      <profile-input label="Full Name" :error="errors.first('name')">
        <input
          v-model="form.name"
          v-validate="'required'"
          name="name"
          type="text"
        />
      </profile-input>

      <profile-input label="Phone Number" :error="errors.first('phoneNumber')">
        <input
          v-model="form.phoneNumber"
          v-validate="'required|numeric'"
          name="phoneNumber"
          type="text"
        />
      </profile-input>

      <profile-input label="Email" :error="errors.first('email')">
        <input
          v-model="form.email"
          v-validate="'required|email'"
          name="email"
          type="email"
          :disabled="hasCustomerInfo"
        />
      </profile-input>

      <profile-input label="Country" :error="errors.first('country')">
        <select
          v-model="form.country"
          v-validate="'required'"
          name="country"
          disabled
        >
          <option>Country</option>
          <option value="US">
            United States
          </option>
        </select>
      </profile-input>

      <profile-input
        label="State / Province"
        :error="errors.first('addr1Code')"
      >
        <select-states
          v-validate="'required'"
          :state="form.addr1Code"
          name="addr1Code"
          @change="onChangeState"
        />
      </profile-input>

      <profile-input
        label="Address Line 1 (City)"
        :error="errors.first('addr2')"
      >
        <input
          v-model="form.addr2"
          v-validate="'required'"
          name="addr2"
          type="text"
        />
      </profile-input>

      <profile-input
        label="Address Line 2 (Street)"
        :error="errors.first('addr3')"
      >
        <input
          v-model="form.addr3"
          v-validate="'required'"
          name="addr3"
          type="text"
        />
      </profile-input>

      <profile-input label="ZIP Code" :error="errors.first('zipCode')">
        <input
          v-model="form.zipCode"
          v-validate="'required|numeric'"
          type="text"
          name="zipCode"
        />
      </profile-input>
    </fieldset>

    <profile-button type="submit" class="Profile-submit" :disabled="hasError">
      Update
    </profile-button>
  </form>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import pick from 'lodash/pick'
import FormMixin from '@/mixins/Form'
import SelectStates from '@/components/common/States.vue'
import ProfileInput from '@/components/common/Input.vue'
import ProfileButton from '@/components/common/Button.vue'
import { State } from '@/components/common/States/types'
import { CustomerState } from '@/store/modules/customer/types'

type CustomerInfo = CustomerState['info']

const customerModule = namespace('customer')

const initialState = {
  addr1: '',
  addr1Code: '',
  addr2: '',
  addr3: '',
  company: '',
  country: 'US',
  countryCode: '',
  countryName: 'United States',
  customerId: 0,
  email: '',
  name: '',
  phoneNumber: '',
  usedDateTime: '',
  zipCode: '',
}

@Component({
  components: {
    SelectStates,
    ProfileInput,
    ProfileButton,
  },
})
export default class Profile extends Mixins(FormMixin) {
  @customerModule.Getter('info')
  customerInfo!: CustomerInfo

  @customerModule.Getter('hasCustomerInfo')
  hasCustomerInfo!: boolean

  @customerModule.Action('patchInfo')
  patchInfo!: (params: typeof initialState) => void

  form = {
    ...initialState,
  }

  get hasError() {
    return this.$validator.errors.any()
  }

  onChangeState(state: State) {
    this.form.addr1 = state.value
    this.form.addr1Code = state.key
  }

  async onSubmit() {
    const result = await this.$validator.validateAll()

    if (!result) {
      return
    }

    await this.patchInfo(this.form)
  }

  mounted() {
    if (this.customerInfo) {
      const customerInfo = pick(
        {
          ...this.customerInfo.address,
          ...this.customerInfo,
        },
        [
          'name',
          'phoneNumber',
          'email',
          'country',
          'addr1Code',
          'addr1',
          'addr2',
          'addr3',
          'zipCode',
        ]
      )

      this.form = {
        ...this.form,
        ...customerInfo,
      }
    }
  }
}
</script>

<style scoped>
.Profile-submit {
  margin-top: 20px;
}
</style>
