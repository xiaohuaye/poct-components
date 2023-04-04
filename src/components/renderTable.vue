<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from 'vue';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    description: '我是胡彦祖，今年42岁，住在西湖区湖底公园1号',
  },
]

const columns = reactive([
{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: '300px',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: '300px',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: '300px',
  },
])

let timer: any = null;

onMounted(() => {
  timer = setInterval(() => {
    if(columns[2].title === '住址') {
      columns.splice(2, 1, {title: '描述', dataIndex: 'description', key: 'description', width: '300px'})
    } else {
      columns.splice(2, 1, {title: '住址', dataIndex: 'address', key: 'address', width: '300px'})
    }
  }, 3000);
})

onUnmounted(() => {
  clearInterval(timer);
})

</script>

<style lang="less" scoped></style>