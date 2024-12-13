<template>
  <!--文章发布页面-->
  <div class="article-editor">
    <!--标题输入框-->
    <title-input/>

    <!--标签输入框-->
    <tag-editor/>

    <!-- 摘要编辑框 -->
    <div class="summary-container">
      <label for="summary">摘要：</label>
      <textarea
        id="summary"
        v-model="summary"
        placeholder="在此输入文章摘要..."
        rows="4"
      ></textarea>
    </div>

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
import {ref} from 'vue';
  // import {QuillEditor} from "@vueup/vue-quill";
  // import "@vueup/vue-quill/dist/vue-quill.snow.css";
  import titleInput from "@/components/titleInput.vue";
  import tagEditor from "@/components/tagEditor.vue";

  // 文章内容
  // const content = ref(null);



  // 文章摘要
  const summary = ref("");

  // 编辑器配置
  // const editorOptions = {};

</script>

<style scoped>
  /* 添加一些样式 */
  .article-editor {
    padding: 20px;
  }


  /* 摘要编辑框样式 */
  .summary-container {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center; /* 垂直居中对齐*/
  }

  /*摘要标签*/
  .summary-container label {
    margin-bottom: 5px;
    font-size: 1em;
  }

  /*摘要输入框*/
  .summary-container textarea {
    width: 69%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    resize: vertical; /* 允许垂直调整大小 */
    transition: border-color 0.3s ease; /* 添加过渡效果 */
  }

  .summary-container textarea:focus {
    border: 2px solid #61caef; /* 焦点状态下的边框颜色 */
    outline: none; /* 移除点击时的默认轮廓 */
  }
</style>
