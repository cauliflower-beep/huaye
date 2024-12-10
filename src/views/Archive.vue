<template>
  <div class="archive">
    <!--页面标题-->
    <div class="title">文章归档</div>

    <!--切换年份-->
    <div class="switch-year">
      <label>切换年份: </label>
      <div class="years">
        <div v-for="year in years" :key="year" class="year">
          <button @click="selectYear(year)" :class="{'selected-year' : selectedYear === year}">
            {{year}}年
          </button>
        </div>
      </div>
    </div>

    <foot/>

  </div>

</template>

<script setup lang="ts">
  import {ref} from "vue"
  import foot from '@/components/footer.vue';
  // vue3中通常使用axios发送网络请求
  import apiCli from '@/api';

  // 从后台服务器获取到的年份列表
  const years = ref(['2024','2023','2022', '2021', '2020', '2019', '2018', '2017', '2016'])

  // 当前选中的年份
  const selectedYear = ref(null)

  // 从后台服务器获取到的文章数据
  // const articles = ref(null);

  // 点击年份时更新选中的年份 并向后台请求文章列表
  // 标记为async异步函数，方便使用await等待异步操作完成
  async function selectYear(year: string) {
    selectedYear.value = year

    try {
      const rsp = await apiCli.get(`/archives`,{
        params:{year} // 这将转化为查询字符串 /archives?year=2024
      });

      // 处理响应数据，更新界面或状态
      console.log(rsp.data);
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

  .switch-year{
    display: flex;
    flex-direction: row;

    align-items: center; /*垂直居中对齐*/
    gap: 10px;
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
    font-size: 17px;
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

</style>
