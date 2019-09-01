<template>
  <validation-observer
    tag="form"
    ref="observer"
    v-slot="{ invalid }"
    class="Form"
    @submit.prevent="onSubmit"
  >
    <fieldset class="Form-fieldset">
      <validation-provider
        name="Full Name"
        rules="required"
        v-slot="{ errors }"
      >
        <profile-input label="Full Name" :error="errors[0]">
          <input v-model="form.name" name="name" type="text" />
        </profile-input>
      </validation-provider>

      <validation-provider
        name="Phone Number"
        rules="required"
        v-slot="{ errors }"
      >
        <profile-input label="Phone Number" :error="errors[0]">
          <input v-model="form.phoneNumber" name="phoneNumber" type="text" />
        </profile-input>
      </validation-provider>

      <validation-provider
        name="Email"
        rules="required|email"
        v-slot="{ errors }"
      >
        <profile-input label="Email" :error="errors[0]">
          <input
            v-model="form.email"
            name="email"
            type="email"
            :disabled="hasCustomerInfo"
          />
        </profile-input>
      </validation-provider>

      <validation-provider name="Country" rules="required" v-slot="{ errors }">
        <profile-input label="Country" :error="errors[0]">
          <select v-model="form.country" name="country" disabled>
            <option>Country</option>
            <option value="US">
              United States
            </option>
          </select>
        </profile-input>
      </validation-provider>

      <validation-provider
        name="State / Province"
        rules="required"
        v-slot="{ validate, errors }"
      >
        <profile-input label="State / Province" :error="errors[0]">
          <select-states
            :state="form.addr1Code"
            name="addr1Code"
            @change="onChangeState($event) || validate($event)"
          />
        </profile-input>
      </validation-provider>

      <validation-provider
        name="Address Line 1 (City)"
        rules="required"
        v-slot="{ errors }"
      >
        <profile-input label="Address Line 1 (City)" :error="errors[0]">
          <input v-model="form.addr2" name="addr2" type="text" />
        </profile-input>
      </validation-provider>

      <validation-provider
        name="Address Line 2 (Street)"
        rules="required"
        v-slot="{ errors }"
      >
        <profile-input label="Address Line 2 (Street)" :error="errors[0]">
          <input v-model="form.addr3" name="addr3" type="text" />
        </profile-input>
      </validation-provider>

      <validation-provider
        name="ZIP Code"
        rules="required|numeric"
        v-slot="{ errors }"
      >
        <profile-input label="ZIP Code" :error="errors[0]">
          <input v-model="form.zipCode" type="text" name="zipCode" />
        </profile-input>
      </validation-provider>
    </fieldset>

    <profile-button type="submit" class="Profile-submit" :disabled="invalid">
      Update
    </profile-button>
  </validation-observer>
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
  patchInfo!: (params: typeof initialState) => Promise<void>

  form = {
    ...initialState,
  }

  onChangeState(state: State) {
    this.form.addr1 = state.value
    this.form.addr1Code = state.key
  }

  async onSubmit() {
    const result = await this.$refs.observer.validate()

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
        ],
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
