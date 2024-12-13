<template>
  <!--文章发布页面-->
  <div class="article-editor">

    <div class="article-signature">
      <!--左侧搞个标题和摘要编辑器-->
      <div class="left-side">
        <!--标题输入框-->
        <title-editor/>

        <!-- 摘要编辑框 -->
        <summary-editor/>
      </div>

      <div class="right-side">
        <publish-buttons/>

        <!--标签输入框-->
        <tag-editor/>
      </div>
    </div>

    <!-- markdown编辑器 -->
    <markdown-editor/>
  </div>
</template>

<script setup lang="ts">
  import titleEditor from "@/components/titleEditor.vue";
  import tagEditor from "@/components/tagEditor.vue";
  import summaryEditor from "@/components/summaryEditor.vue";
  import publishButtons from "@/components/publishButtons.vue";
  import markdownEditor from "@/components/markdownEditor.vue";

  // 文章内容
  // const content = ref(null);

  // 编辑器配置
  // const editorOptions = {};

</script>

<style scoped>
  /* 添加一些样式 */
  .article-editor {
    padding: 20px;
  }

  .article-signature{
    display: flex;
    flex-direction: row;

    gap:5%;
  }

  .left-side{
    width: 70%;
    //border: 1px solid #BDBDBD;
  }

  .right-side{
    width: 20%;
    //border: 1px solid #BDBDBD;

    display: flex;
    flex-direction: column;
    gap:10px;
  }

</style>
