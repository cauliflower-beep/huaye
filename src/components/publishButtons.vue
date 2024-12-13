
<template>
  <!--提交按钮-->
  <div class="buttons">
    <button @click="saveDraft" class="save-draft">保存草稿</button>
    <button @click="publishArticle" class="publish-button">发布文章</button>
  </div>
</template>

<script setup lang="ts">
  // 发布文章的方法
  const publishArticle = () => {
    // console.log("文章标题:", title.value);
    // console.log("文章内容:", content.value);
    // console.log("文章标签:", tagsList.value);
    // console.log("文章摘要:",summary.value);
  };

  // 保存草稿的方法
  function saveDraft() {
    // 这里实现保存草稿的逻辑
    console.log("草稿已保存");
  }
</script>

<style scoped>

  .buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  button{
    padding: 8px 16px;
    font-size: 12px;

    width: 80%;

    border-radius: 20px;
    background: none;
    border: 1px solid #61caef;
    cursor: pointer;
  }

  /* 保存草稿*/
  .save-draft{
    color: #61caef;
  }

  /* 发布按钮*/
  .publish-button{
    background-color: #61caef;
    color: white;
  }
</style>
