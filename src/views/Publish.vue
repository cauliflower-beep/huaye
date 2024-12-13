<template>
  <!--文章发布页面-->
  <div class="article-editor">
    <!--标题输入框-->
    <title-input/>

    <!--标签输入框-->
    <tag-editor/>

    <!-- 摘要编辑框 -->
    <summary-editor/>

    <!-- 富文本编辑器 -->
<!--    <quill-editor-->
<!--      v-model:content="content"-->
<!--      contentType="text"-->
<!--      theme="snow"-->
<!--      :options="editorOptions"-->
<!--    />-->
  </div>
</template>

<script setup lang="ts">
  // import {QuillEditor} from "@vueup/vue-quill";
  // import "@vueup/vue-quill/dist/vue-quill.snow.css";
  import titleInput from "@/components/titleInput.vue";
  import tagEditor from "@/components/tagEditor.vue";
  import summaryEditor from "@/components/summaryEditor.vue";

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

</style>
