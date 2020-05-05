<template>
  <!-- Edit Article -->
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tagListText"
                  @keyup.enter="handleAddTag"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(item, index) in article.tagList"
                    :key="index"
                  >
                    <i
                      class="ion-close-round"
                      @click="article.tagList.splice(index, 1)"
                    ></i>
                    {{ item }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click.prevent="handleCreate"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Article -->
</template>

<script>
import { createArticle } from '@/api/article';

export default {
  // Nuxt提供的一个特殊的api，在渲染页面的时候会自动调用这个中间件模块中导出的函数
  middleware: 'authenticated',
  name: 'edit',
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      tagListText: '', // 标签列表输入框的值
    };
  },
  methods: {
    async handleCreate() {
      const { data } = await createArticle({
        article: this.article,
      });
      this.$router.push(`/article/${data.article.slug}`);
    },
    handleAddTag() {
      const tagListText = this.tagListText;
      const { tagList } = this.article;
      // 非空校验
      if (!tagListText.length) {
        return;
      }
      // 重复校验
      if (this.article.tagList.includes(tagListText)) {
        return;
      }
      tagList.push(tagListText);
      this.tagListText = '';
    },
  },
};
</script>

<style></style>
