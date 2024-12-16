<template>
  <div class="home">

    <!--首页 展示最新文章-->
    <div class="title">最近更新</div>

    <!--主体区域，可滚动-->
    <div class="article-scroll-area">
      <!--文章列表-->
      <div v-if="articles && articles.length > 0">
        <ul class="article-list">
          <li v-for="article in articles" :key="article.id" class="article">
            <!--文章标题-->
            <router-link :to="{
                              path: '/article',
                              query:{
                                title:article.title
                              }
                            }"
                         class="article_title"
            >
              {{ article.title}}
            </router-link>

            <!--时间及作者-->
            <div class="article-info">
              <div>
                <!--icon-->
                <calendar-icon/>
                <span class="article-time">{{ article.create_time }}</span>
              </div>

              <div class="article-author">{{ article.Author }}</div>
            </div>

            <!--文章摘要-->
            <div class="article-summary">
              {{ article.summary }}
              <router-link :to="{
                              path: '/article',
                              query:{
                                      title:article.title
                                    }
                              }"
                           class="read-all"
              >阅读全文</router-link>
            </div>

            <!--文章tag-->
            <div class="article-tags">
              <tags-icon/>
              <div v-for="tag in article.tags" :key="tag">
                <button class="tag-button" @click="queryTag">{{ tag }}</button>
              </div>
            </div>

            <div class="article-underline"></div>
          </li>
        </ul>
      </div>

      <div v-else class="no-articles">
        暂无文章
      </div>
    </div>

    <div class="load-more">
      <div class="continue-part">继续学习</div>

      <!--分页按钮-->
      <button class="load-more-button" @click="loadMoreArticles">浏览更多文章</button>
      <!--下方添加一条点虚线-->
      <div class="load-more-underline"></div>
    </div>

    <foot/>

  </div>

</template>

<script setup lang="ts">
  import {ref,onMounted} from "vue";
  import {RouterLink} from "vue-router";

  import foot from '@/components/footer.vue';
  import CalendarIcon from '@/components/icons/IconCalendar.vue';
  import TagsIcon from '@/components/icons/IconTags.vue';
  import apiCli from "@/api";

  // 从后台服务器获取到的文章数据
  const articles = ref([]);

  // 组件挂载后从服务器获取文章列表
  onMounted(async ()=>{
    // 发起文章数据请求
    try {
      const params ={
        page_num:1,
        page_size:20,
        sort:"desc"
      }
      const rsp = await apiCli.post('/v1/posts',params);
      if (rsp.data.code === 200){
        // 更新年份列表
        articles.value = rsp.data.data;
      }else{
        console.error("There was an error fetching the articles!", rsp.data.msg);
      }
    } catch (error){
      console.error("There was an error fetching the articles!", error);
    }
  });

  // 查询tag
  const queryTag = () => {
    console.log('点击了“tag”按钮');
  };

  // 加载更多文章
  const loadMoreArticles = () => {
    console.log('点击了“浏览更多文章”按钮');
  };

</script>


<style scoped>
  .home{}

  .title, .continue-part{
    font-size: 19px;
    color: #999999;

    margin-bottom: 20px; /* 标题与内容之间的间距 */
    border-bottom: 1px solid #EEEEEE; /* 添加下划线 */
    padding-bottom: 3px; /* 确保文本与下划线之间有适当的空间 */
    display: flex; /* 让下划线只覆盖文本宽度 */
  }

  /* -------------------文章滚动区域-------------------- */
  .article-scroll-area {
    max-height: 100%; /* 设置最大高度 */
    overflow-y: auto; /* 当内容超出容器高度时启用滚动 */
    //border: 1px solid #ddd; /* 可选：添加边框 */
    margin-top: 10px; /* 与标题保持一定的距离 */
  }

  .article-list {
    list-style-type: none;
    padding: 0;

    display: flex;
    flex-wrap: wrap; /* 允许子元素换行*/
    gap: 10px; /*子元素之间的间距*/
    min-width: 400px; /* 设置窗口最小宽度*/
  }

  /* 当窗口宽度小于或等于 768px 时，应用以下样式 */
  /* 768px通常是区分桌面盒平板/移动设备的布局*/
  @media (max-width: 768px) {
    .article {
      flex: 1 1 100%; /* 占据全部宽度 */
    }
  }


  .article{
    display: flex;
    flex-direction: column;
    gap:10px;

    flex: 1 1 calc(50% - 10px); /* 每篇文章项占据一般宽度 - 间距*/
    min-width: 400px; /* 每篇文章最小宽度*/
    box-sizing: border-box; /* 修改默认盒模型为 总宽度包括内边距或边框*/
    background-color: #fff; /* 可选：背景颜色 */
    padding: 10px; /* 可选：添加内边距 */
    margin-bottom: 10px; /* 确保在单列模式下有足够的间距 */
  }

  /* 文章标题 */
  .article_title{
    font-size: 25px;
    color: black;
    padding-left: 0;
    text-decoration: none;
  }
  /* 文章标题鼠标悬停 */
  .article_title:hover {
    text-decoration: underline; /* 恢复下划线 */
  }

  /* 文章信息*/
  .article-info{
    display: flex;
    gap: 30px;
    font-size: 10px;
    color: #757575;
  }

  .article-info > div:first-child {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
  }

  .article-info > div:first-child span {
    margin-left: 2px; /* 在图标和时间戳之间添加间距 */
  }

  .article-author{
    display: flex;
    align-items: center; /* 垂直居中对齐*/
  }

  .article-summary{
    font-size: 17px;
  }

  /* 摘要及阅读全文按钮*/
  .read-all {
    margin-left: 1px; /* 在摘要和按钮之间添加一些空间 */
    background-color: #61caef;
    border: none;
    border-radius: 4px;
    padding: 2px 5px;
    font-size: 10px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;

    text-decoration: none; /* 去除按钮下方下划线*/
    white-space: nowrap; /* 文字不换行*/
  }

  .read-all:hover {
    background-color: #237db6;
  }

  /* tags */
  .article-tags{
    display: flex;
    font-size: 10px;
    color: #757575;
    align-items: flex-end; /* 文字跟图标底部对齐*/
  }

  .tag-button {
    background: none;
    border: none; /* 边框 */
    color: #757575; /* 文本颜色 */
    cursor: pointer; /* 改变鼠标指针为手型 */
    font-size: 10px;
    text-align: center;
    padding: 3px;

    /* 下划线*/
    position: relative; /* 使伪元素相对于此元素定位 */
    display: inline-block; /* 正确使用伪元素*/
  }

  .tag-button::after{
    content: '';
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 90%; /* 下划线宽度 */
    height: 1px; /* 下划线厚度 */
    background-color: currentColor; /* 使用当前颜色（即继承自父元素的颜色） */
    display: block;
  }

  .tag-button:hover {
    color: #BDBDBD;
  }

  .article-underline {
    border-bottom: 1px dotted #EEEEEE; /* 设置点虚线的颜色和大小 */
    margin-top: 5px;
  }

  /*-------------------加载更多-------------------*/
  .load-more{
    margin-top: 15px;
    padding-left: 10px;
  }

  .load-more-button {
    display: block; /* 展示为块级元素*/
    width: 85px;
    height: 35px;
    //margin-top: 5px; /* 与文章列表保持一定的距离 */
    //padding: 10px;
    background-color: #61caef; /* 按钮背景颜色 */
    color: #ffffff; /* 文本颜色 */
    border: none; /* 边框 */
    border-radius: 5px; /* 圆角 */
    cursor: pointer; /* 改变鼠标指针为手型 */
    font-size: 10px;
    text-align: center;
  }

  .load-more-button:hover {
    background-color: #237db6; /* 鼠标悬停时改变背景颜色 */
    //border-color: #999; /* 鼠标悬停时改变边框颜色 */
  }

  .load-more-underline {
    //height: 1px;
    border-bottom: 1px dotted #EEEEEE; /* 设置点虚线的颜色和大小 */
    margin-top: 10px; /* 与按钮之间的间距 */
  }

</style>
