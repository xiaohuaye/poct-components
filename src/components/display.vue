<script setup lang="ts">
import { reactive, ref } from 'vue'
import FixedPositionTable from './fixedPositionTable.vue';
import QrCode from './qrCode.vue';
import MarkdownDisplay from './markdownDisplay.vue';

const activeComponent = ref('FixedPositionTable')

const components = reactive([
  {value: 'FixedPositionTable', label: '表格input'}, 
  {value: 'QrCode', label: '二维码'},
  {value: 'MarkdownDisplay', label: 'Markdown展示'}
])

function changeComponent(name: string) {
  activeComponent.value = name;
} 

</script>

<template>
  <div>
    <a-button
    v-for="item in components" 
    :key="item.value"  
    @click="changeComponent(item.value)" 
    >{{item.label}}</a-button>
  </div>

  <div>
    <FixedPositionTable v-if="activeComponent === 'FixedPositionTable'"/>
    <QrCode v-if="activeComponent === 'QrCode'" />
    <MarkdownDisplay v-if="activeComponent === 'MarkdownDisplay'" />
  </div>
</template>

<style scoped lang="less">

</style>
