
<template>
  <div class="summary-container">
    <label for="summary">摘要：</label>
    <textarea
      id="summary"
      v-model="summary"
      placeholder="在此输入文章摘要..."
      rows="4"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue"
  // 文章摘要
  const summary = ref("");
</script>

<style scoped>
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
