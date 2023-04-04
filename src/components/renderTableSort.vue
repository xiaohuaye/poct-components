<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <div>
            {{ test(column, text, record) }}
          </div>
        </template>

        <template v-if="column.dataIndex === 'address'">
          <div>
            {{ test(column, text, record) }}
          </div>
        </template>

        <template v-if="column.dataIndex === 'age'">
          {{ test(column, text, record) }}
        </template>
      </template>
    </a-table>
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
})

onUnmounted(() => {
})

function test(column: any, text: any, record: any) {
  console.log('column', column);
  console.log('text', text);
  console.log('record', record);

  return text;
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 22px;
}
</style>