<template>
  <!-- Home -->
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">NuxtJS</h1>
        <p>A project to study NuxtJS.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="(article, index) in articles"
            :key="index"
          >
            <div class="article-meta">
              <a href="profile.html"><img :src="article.author.image"/></a>
              <div class="info">
                <a href="" class="author">{{ article.author.username }}</a>
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i>{{ article.favoritesCount }}
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a
                href=""
                class="tag-pill tag-default"
                v-for="(tag, index) in tags"
                :key="index"
                >{{ tag }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Home -->
</template>

<script>
import { getArticles } from '@/api/article';
import { getTags } from '@/api/tag';
export default {
  name: 'index',
  // 如果数据有seo需求，将数据写到asyncData，没有写到created中
  async asyncData() {
    // await会等待后面的异步操作执行结束后再往下继续执行
    // 先请求文章，再请求tag
    // const { data: articlesData } = await getArticles();
    // const { data: tagsData } = await getTags();
    // promise.all会接受一个数组，数组中存储promise对象，当数组中所有promise都resolve之后，promise.all也就resolve成功
    // 这两个请求会同时执行
    // 返回值是一个数组，按照任务的顺序存储任务的结果
    const [articlesData, tagsData] = await Promise.all([
      getArticles(),
      getTags(),
    ]);
    return {
      articles: articlesData.data.articles,
      tags: tagsData.data.tags,
    };
  },
};
</script>

<style></style>
