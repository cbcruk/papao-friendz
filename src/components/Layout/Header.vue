<template>
  <header
    :class="{
      'Header': true,
      'is-stack': !isProductType
    }"
  >
    <template v-if="isProductType">
      <h1
        hidden
        class="Header-title"
      >
        KAKAO FRIENDS
      </h1>

      <a
        ref="char"
        :class="{
          'Header-link': true,
          'is-apeach': isApeach
        }"
        @click="handleLink"
        @animationend="onAnimationEnd"
      />
    </template>
    <template v-else>
      <a
        @click="handleRouter"
      >
        <icon-angle-horizontal
          :is-left="true"
          :width="10"
        />
      </a>

      <h1 class="Header-title">
        {{ $route.meta.title }}
      </h1>
    </template>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import IconAngleHorizontal from '@/components/common/Icons/AngleHorizontal.vue'
import random from 'lodash/random'

const collectionModule = namespace('collection')

@Component({
  components: {
    IconAngleHorizontal,
  },
})
export default class Header extends Vue {
  @collectionModule.Getter('itemsLength')
  itemsLength!: number

  isApeach: boolean = false

  $refs!: {
    char: HTMLAnchorElement
  }

  get isProductType() {
    return this.$route.matched.some(
      m => m.name === 'home' || m.name === 'product'
    )
  }

  handleRouter() {
    this.$router.go(-1)
  }

  handleLink() {
    this.$router.push('/collection')
  }

  onAnimationEnd() {
    this.$refs.char.classList.remove('is-anime')
  }

  @Watch('itemsLength')
  onItemsChanged(val: number, oldVal: number) {
    const { char } = this.$refs

    if (!char) {
      return
    }

    if (val > oldVal) {
      char.classList.add('is-anime')
    }
  }

  mounted() {
    const randomNumber = random(0, 1)

    if (randomNumber) {
      this.isApeach = true
    }
  }
}
</script>

<style scoped>
.Header {
  --height: 60px;
  --nav-button-width: 40px;
  --anime-width: 40px;
  --anime-frame: 6;
  --anime-size: calc(var(--anime-width) * var(--anime-frame));
}

.Header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  height: var(--height);
  justify-content: center;
  align-items: center;
  background-color: rgba(var(--oc-white-rgb), 0.95);
}

.Header.is-stack {
  display: grid;
  grid-template-columns: var(--nav-button-width) 1fr var(--nav-button-width);
  justify-items: center;
  height: calc(var(--height) - 5px);
  border-bottom: 1px solid var(--oc-gray-4);
}

.Header-title {
  font-weight: bold;
}

.Header-link {
  width: var(--nav-button-width);
  height: var(--nav-button-width);
  background: url('./Header/images/img_ryan.png') 0 0 no-repeat;
  background-size: var(--anime-size);
}

.Header-link.is-apeach {
  background-image: url('./Header/images/img_apeach.png');
}

.Header-link.is-anime {
  animation: anime steps(var(--anime-frame)) 0.6s 1;
  animation-play-state: running;
}

@keyframes anime {
  from {
    background-position: 0;
  }

  to {
    background-position: calc(var(--anime-size) * -1);
  }
}
</style>
