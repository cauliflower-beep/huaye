<template>
  <div class="archive">
    <!--页面标题-->
    <div class="title">文章归档</div>

    <!--切换年份-->
    <div class="switch-year">
      <label class="switch-year-label">切换年份: </label>
      <div class="years">
        <div v-for="year in years" :key="year" class="year">
          <button @click="selectYear(year)" :class="{'selected-year' : selectedYear === year}">
            {{year}}年
          </button>
        </div>
      </div>
    </div>

    <!--文章列表区域，可滚动-->
    <div class="article-scroll-area">
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

              <div class="article-author">{{ article.author }}</div>
            </div>

            <!--文章tag-->
            <div class="article-tags">
              <tags-icon/>
              <div v-for="tag in article.tags" :key="tag">
                <button class="tag-button" @click="queryTag">{{ tag }}</button>
              </div>
            </div>

          </li>
        </ul>

      </div>

      <div v-else class="no-articles">
        暂无文章
      </div>

      <div class="article-underline"></div>
    </div>

    <foot/>

  </div>

</template>

<script setup lang="ts">
  import {ref,onMounted} from "vue"
  import foot from '@/components/footer.vue';
  // vue3中通常使用axios发送网络请求
  import apiCli from '@/api';
  import {RouterLink} from "vue-router";
  import CalendarIcon from "@/components/icons/IconCalendar.vue";
  import TagsIcon from "@/components/icons/IconTags.vue";

  // 从后台服务器获取到的年份列表
  const years = ref([])

  // 当前选中的年份
  const selectedYear = ref(null)

  // 组件挂载后从服务器获取年份列表
  onMounted(async () => {
    try {
      const rsp = await apiCli.get('/v1/archives');
      if (rsp.data.code === 200){
        // 更新年份列表
        years.value = rsp.data.data;

        // 默认选择最新的年份
        await selectYear(String(rsp.data.data[0]));
      }else{
        console.error("There was an error fetching the archives!", rsp.data.msg);
      }
    } catch (error){
      console.error("There was an error fetching the archives!", error);
    }
  });

  // 从后台服务器获取到的文章数据
  const articles = ref(null);

  // 点击年份时更新选中的年份 并向后台请求文章列表
  // 标记为async异步函数，方便使用await等待异步操作完成
  async function selectYear(year: string) {
    selectedYear.value = year

    try {
      const rsp = await apiCli.get(`/v1/archives`,{
        params:{year} // 这将转化为查询字符串 /archives?year=2024
      });

      // 处理响应数据，更新界面或状态
      articles.value = rsp.data.data
      console.log(articles.value)
    } catch (error){
      console.error("There was an error fetching the archives!", error);
    }
  }
</script>

<style scoped>

  .archive{}

  .title, .continue-part{
    font-size: 19px;
    color: #999999;

    margin-bottom: 20px; /* 标题与内容之间的间距 */
    border-bottom: 1px solid #EEEEEE; /* 添加下划线 */
    padding-bottom: 3px; /* 确保文本与下划线之间有适当的空间 */
    display: flex; /* 让下划线只覆盖文本宽度 */
  }

  /* 切换年份*/
  .switch-year{
    display: flex;
    flex-direction: row;

    align-items: center; /*垂直居中对齐*/
    gap: 10px;
  }

  .switch-year-label{
    font-size: 15px;
  }

  .years{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  /*移除router-link默认的下划线*/
  .year button{
    border: none;
    background: none;
    color: #61caef;
    font-size: 15px;
  }

  /*鼠标悬停时的样式*/
  .year button:hover{
    text-decoration: underline;
    color: #237db6;
    cursor: pointer; /*更改鼠标指针为手型*/
  }

  /* 选中的年份样式*/
  .year button.selected-year{
    color: black;
    font-weight: bold; /*加粗显示*/
  }

  /*文章列表滚动区域*/
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
    flex-direction: column;
    gap: 20px; /*子元素之间的间距*/
    min-width: 400px; /* 设置窗口最小宽度*/
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

  /* 创建时间及作者*/
  .article-info{
    display: flex;
    gap: 30px;
    font-size: 10px;
    color: #757575;

    margin-top: 20px;
    margin-bottom: 20px;
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

    margin-right: 20px;
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

  /* 下划线*/
  .article-underline {
    border-bottom: 1px dotted #EEEEEE; /* 设置点虚线的颜色和大小 */
    margin-top: 5px;
  }

</style>
