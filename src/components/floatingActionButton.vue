<template>
  <div class="floating-action-button" @click="goToPostPage">
    <span class="icon">+</span>
  </div>
</template>

<script setup lang="ts">
  // import {useRouter} from "vue-router";
  //
  // const router = useRouter();
  const goToPostPage = () => {
    // router.push("/post");
    console.log("Go to Post Page");
  };

</script>

<style scoped>

  .floating-action-button{
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 56px;
    height: 56px;
    background-color: #f44336; /* Material Red */
    color: white;
    border-radius: 50%;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
    0 3px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .floating-action-button:hover {
    background-color: #61caef; /* Darken on hover */
  }

  .icon {
    font-size: 24px;
  }

</style>
