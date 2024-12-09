<template>

<!--  文章内容展示区-->
  <div class="article-content">
    {{route.query.title}}
  </div>

  <!--看看其他-->

  <!--评论区-->

  <foot/>
</template>

<script setup lang="ts">
  import foot from '@/components/footer.vue';
  import {useRoute} from "vue-router";
  import {ref} from "vue"
  const route = useRoute()

  // 从后台服务器获取到的文章数据
  const article = ref(
    {
      id: 1,
      title: 'AutoConsis：UI内容一致性智能检测',
      create_time:'2024年11月21日',
      Author:'到店研发平台',
      word_count: 6596,
      time_count:14,
      summary: '美团到店研发平台质量工程部与复旦大学计算机学院周扬帆教授团队展开了大前端智能化测试领域的科研合作，' +
        '从UI界面内容一致性校验入手，并实现了一套自动化智能检测流程，' +
        '相关论文被软件工程领域具有国际影响力的会议ICSE 2024（CCF-A类会议）的Software In Practice Track（软件工程实践应用）收录。',
      tags:[
        {name:'到店'},
        {name:'测试'},
        {name:'UI'},
        {name:'智能检测'},
        {name:'大前端'}
      ],
    });
</script>

<style scoped>

</style>
