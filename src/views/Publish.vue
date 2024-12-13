<template>
  <!--文章发布页面-->
  <div class="article-editor">

    <div class="article-signature">
      <!--左侧搞个标题和摘要编辑器-->
      <div class="left-side">
        <!--标题输入框-->
        <title-input/>

        <!-- 摘要编辑框 -->
        <summary-editor/>
      </div>

      <div class="right-side">
        <publish-buttons/>

        <!--标签输入框-->
        <tag-editor/>
      </div>
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
  // import {QuillEditor} from "@vueup/vue-quill";
  // import "@vueup/vue-quill/dist/vue-quill.snow.css";
  import titleInput from "@/components/titleInput.vue";
  import tagEditor from "@/components/tagEditor.vue";
  import summaryEditor from "@/components/summaryEditor.vue";
  import publishButtons from "@/components/publishButtons.vue";

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
