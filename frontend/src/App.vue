<script setup>
import { onMounted, ref } from 'vue';

const html = ref();

const files = ref([]);

const fetchFiles = async () => {
  // fetch files from server
  try {
    // 124.223.35.249
    const response = await fetch('http://124.223.35.249:3001/notes');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    files.value = data;
  } catch (e) {
    console.log(e)
  }
};

const getFiles = async (fileName) => {
  try {
    const response = await fetch(`http://localhost:3001/notes/${fileName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e)
  }
}
onMounted(fetchFiles)
</script>

<template>
  <h2>上传文件</h2>
  <form>
    文件：<input type="file" />
    <hr />
    <button type="submit">提交</button>
  </form>
  <hr />
  <h2>文件列表</h2>
  <ul>
    <li v-for="file in files" :key="file" @click="getFiles(file)">{{ file }}</li>
  </ul>
</template>

<style scoped></style>async
