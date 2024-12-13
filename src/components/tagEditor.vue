<template>

  <!-- 标签容器 -->
  <div class="tag-container">
    <!-- 展示已输入的标签 -->
    <div class="tags-list">
        <span v-for="(tag, index) in tagsList" :key="index" class="tag-item"
              @mouseenter="hoveredTag = index"
              @mouseleave="hoveredTag = -1"
        >
          #{{ tag }}
          <span v-if="hoveredTag === index" class="close-tag" @click.stop="removeTag(index)">×</span>
        </span>
    </div>
    <!-- 标签输入框 -->
    <!--输入重复标签的话，不展示重复标签，在输入框右侧展示一个提示信息：标签重复 todo-->
    <div>
      标签：<input ref="tagInput" v-model="currentTag" type="text"
                  placeholder="输入标签，以enter结束"
                  @keydown.enter.prevent="addTag"
                  class="underline-input"
    />
    </div>

  </div>

</template>

<script setup lang="ts">
  import {nextTick,ref} from "vue"
  // 文章标签
  const currentTag = ref(""); // 当前正在输入的标签
  const tagsList = ref<string[]>([]); // 已经添加的标签列表
  const hoveredTag = ref(-1); // 当前悬停的标签索引，默认为-1表示没有悬停

  // 添加标签
  function addTag() {
    if (currentTag.value.trim()) {
      // 检查标签是否已存在
      if (tagsList.value.includes(currentTag.value.trim())) {
        alert("标签已存在~");
        return;
      }

      // 如果输入框中有内容，则添加到标签列表中
      tagsList.value.push(currentTag.value.trim());
      currentTag.value = ""; // 清空输入框
      // 确保输入框重新获得焦点以便继续输入
      nextTick(() => {
        tagInput.value?.focus();
      });
    }
  }

  // 删除标签
  function removeTag(index:number){
    console.log("点击的idx：",index)
    // 从tagsList.value中删除索引为index的标签 第二个参数1表示删除1个元素
    tagsList.value.splice(index, 1);
  }

  // 获取对输入框元素的引用，在挂载后设置焦点
  const tagInput = ref<HTMLInputElement | null>(null);
</script>

<style scoped>
  /*标签容器*/
  .tag-container{
    display: flex;
    flex-direction: column;
  }

  .tags-list{
    display: flex;
    flex-wrap: wrap; /*允许标签换行*/
    gap:2px 4px; /* 设置标签之间的间隔*/
    margin-bottom: 5px;
    margin-left: 50px;
  }

  /*单个标签样式*/
  .tag-item{
    background-color: #61caef; /*标签背景色*/
    color: white; /*标签字体颜色*/
    padding: 5px 10px; /*标签内边距*/
    border-radius: 20px; /*标签圆角*/
    display: inline-block; /*标签内联显示*/
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 0.6em; /*标签字体大小*/

    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .close-tag {
    margin-left: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  .close-tag:hover {
    color: hotpink;
  }

  /* 标签输入框样式 */
  .underline-input {
    width: 150px; /* 输入框占据整个宽度 */
    padding: 8px 0; /* 上下内边距 */
    border: none; /* 移除所有边框 */
    border-bottom: 1px solid #BDBDBD; /* 只保留下划线 */
    border-radius: 0;
    outline: none; /* 移除点击时的默认轮廓 */
    background-color: transparent; /* 使背景透明 */
    margin-bottom: 20px;
  }

  .underline-input:focus {
    border-bottom: 2px solid #61caef;
  }

</style>
