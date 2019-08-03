<template>
  <div class="Comment">
    <div class="Comment-rating">
      <vue-stars
        class="Comment-rating_icon"
        :width="comment.rating"
      />
    </div>
    <div class="Comment-content">
      {{ comment.content }}
    </div>
    <div class="Comment-log">
      <span class="Comment-user_name">{{ comment.userName }}</span>
      <span class="Comment-time">{{ comment.createdDateTime }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import VueStars from '@/components/common/Stars.vue'
import { CommentItem } from '@/store/modules/product/types'

@Component({
  components: {
    VueStars,
  },
})
export default class Comment extends Vue {
  @Prop(Object)
  comment!: CommentItem
}
</script>

<style scoped>
.Comment {
  --padding: 18px;
}

.Comment {
  padding-top: var(--padding);
  padding-bottom: var(--padding);
}

.Comment:not(:first-child) {
  border-top: 1px solid var(--oc-gray-2);
}

.Comment-rating_icon {
  width: 70px;
}

.Comment-content {
  margin-top: 8px;
}

.Comment-log {
  margin-top: 8px;
  font-size: var(--font-12);
  color: var(--oc-gray-6);
}

.Comment-time {
  margin-left: 8px;
}
</style>
