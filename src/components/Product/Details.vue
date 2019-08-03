<script lang="tsx">
import { VNode } from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import cdn from '@/filters/cdn'
import { Product } from '@/store/modules/product/types'

@Component
export default class Details extends Vue {
  @Prop(Object)
  detail!: Product

  render(h: () => VNode) {
    return (
      <div class="Detail">
        {this.detail.contents &&
          this.detail.contents
            .filter(
              content =>
                content.type === 'DETAIL' || content.type === 'IMAGE_CONTENTS'
            )
            .map(({ content, type }) => {
              const isImage = type.startsWith('IMAGE_')

              return isImage ? (
                <img
                  class="Detail-image"
                  src={cdn(content, { size: '686x0' })}
                  alt=""
                />
              ) : (
                <p class="Detail-content" domPropsInnerHTML={content} />
              )
            })}
      </div>
    )
  }
}
</script>

<style scoped>
.Detail {
  --gap: 20px;
  --gap-spec: 10px;
}

.Detail > [class^='Detail-']:not(:first-child) {
  margin-top: var(--gap);
}

.Detail-image {
  width: 100%;
}

.Detail-content >>> dl {
  color: var(--oc-gray-7);
}

.Detail-content >>> dl:not(:first-child) {
  margin-top: var(--gap-spec);
}

.Detail-content >>> dt {
  font-weight: bold;
}
</style>
