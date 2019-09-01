<template>
  <validation-observer
    tag="form"
    ref="observer"
    v-slot="{ invalid }"
    class="CommentsForm"
    @submit.prevent="onSubmit"
  >
    <label class="CommentsForm-rate_label">
      Rate this product
      <div class="CommentsForm-rate_inputs">
        <input
          v-for="value in 5"
          :key="value"
          v-model="form.rating"
          type="radio"
          :value="value"
          :class="{
            'CommentsForm-rate_input': true,
            'is-active': form.rating >= value,
          }"
        />
      </div>
      <comments-form-stars
        class="CommentsForm-rate_icon"
        :width="form.rating * 20"
      />
    </label>

    <validation-provider rules="required">
      <textarea
        v-model="form.content"
        name="content"
        class="CommentsForm-content"
        :placeholder="randomMessage"
      />
    </validation-provider>

    <button
      :class="{
        'CommentsForm-submit': true,
        button: true,
        'is-outline': true,
      }"
      type="submit"
      :disabled="invalid"
    >
      Submit
    </button>
  </validation-observer>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import random from 'lodash/random'
import Form from '@/mixins/Form'
import CommentsFormStars from '@/components/common/Stars.vue'

const productModule = namespace('product')

const initialForm = {
  rating: 0,
  content: '',
}

@Component({
  components: {
    CommentsFormStars,
  },
})
export default class CommentsForm extends Mixins(Form) {
  @Prop(Number)
  id!: number

  @productModule.Action('setComment')
  setComment!: (params: {
    id: number
    comment: typeof initialForm
  }) => Promise<void>

  messages: string[] = [
    'One of my FAVORITES!',
    'SUPER DUPER AWESOME!',
    'LOVE this!',
    'COOL item! OWN IT NOW!',
    'Just perfect for me!',
    'Super Cool!',
    'It’s the BEST!',
    'Great purchase!',
    'POPPIN’!!',
    'My absolute favorite!',
    'I’m in love!',
    'Super cute & well made',
    'Will never regret!',
    'Cutest ever!',
    'Just like I imagined!',
    'GR8 one!',
    'Admit it! I’s so unique!',
  ]

  form = { ...initialForm }

  get randomMessage() {
    const index = random(this.messages.length)

    return this.messages[index]
  }

  async onSubmit() {
    const response = await this.$refs.observer.validate()

    if (!response) {
      return
    }

    try {
      await this.setComment({ id: this.id, comment: this.form })

      this.form = { ...initialForm }

      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
.CommentsForm-rate_label {
  display: inline-flex;
  position: relative;
  align-items: center;
  font-size: var(--font-12);
  color: var(--oc-gray-6);
}

.CommentsForm-rate_icon {
  width: 110px;
  margin-left: 5px;
}

.CommentsForm-rate_inputs {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
}

.CommentsForm-rate_input {
  width: 22px;
}

.CommentsForm-content {
  display: block;
  width: 100%;
  height: 100px;
  padding: 10px 13px;
  border: 1px solid var(--oc-gray-4);
  border-radius: 3px;
  margin-top: 18px;
}

.CommentsForm-submit {
  width: 100%;
  height: 34px;
  margin-top: 10px;
}
</style>
