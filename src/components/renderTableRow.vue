<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from 'vue';

const dataSource = reactive([
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
])

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
    if (dataSource[0].age === 32) {
      dataSource.splice(0, 1,
        {
          key: '1',
          name: '胡彦斌',
          age: 52,
          address: '西湖区湖底公园1号',
          description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号',
        },
      )
    } else {
      dataSource.splice(0, 1,
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
          description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号',
        },
      )
    }
  }, 3000);
})

onUnmounted(() => {
  clearInterval(timer);
})
</script>

<style lang="less" scoped></style>