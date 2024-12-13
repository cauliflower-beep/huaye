<template>
  <div class="title-and-buttons">

    <div class="title-container">
      <!-- 标题输入框 -->
      标题：
      <input v-model="title" type="text" placeholder="输入文章标题..."
             :maxlength="maxTitleLength"
             @input="updateCounter"
             class="title-input"
      />
      <!--字数统计-->
      <span class="char-counter">{{ title.length }}/{{ maxTitleLength }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue"
  // 文章标题
  const title = ref("");
  const maxTitleLength = 100; // 最大字数限制

  // 更新字数统计
  function updateCounter(){
    // 这个函数会在每次输入时被调用 用于触发试图更新
  }

</script>

<style scoped>

  .title-and-buttons{
    display: flex;
    align-items: center; /*垂直居中对齐*/
    margin-bottom: 20px;
  }

  /*标题输入框*/
  .title-container {
    position: relative;
    display: flex; /* 使用flex布局*/
    flex-wrap: nowrap; /* 禁止内部元素换行*/
    align-items: center; /* 垂直居中对齐*/
    flex-grow: 1;
  }

  .title-input {
    width:80%;
    padding: 8px 32px 8px 8px ;
    font-size: 1.2em;

    border: #BDBDBD 1px solid;
    border-radius: 20px;
  }

  .title-input::placeholder{
    font-size: 0.6em; /*调整提示语字体大小*/
  }

  .title-container input:focus {
    border: 2px solid #61caef; /* 焦点状态下的边框颜色 */
    outline: none; /* 移除点击时的默认轮廓 */
  }

  .char-counter {
    margin-left: 15px;
    margin-top: 10px;
    transform: translateY(-50%);
    font-size: 0.8em;
    color: #777;
  }

</style>
