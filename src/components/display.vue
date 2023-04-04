<script setup lang="ts">
import { reactive, ref } from 'vue'
import FixedPositionTable from './fixedPositionTable.vue';
import QrCode from './qrCode.vue';
import MarkdownDisplay from './markdownDisplay.vue';
import RenderTable from './renderTable.vue';
import RenderTableRow from './renderTableRow.vue';
import RenderTableCell from './renderTableCell.vue';
import RenderTableSort from './renderTableSort.vue';

const activeComponent = ref('FixedPositionTable')

const components = reactive([
  {value: 'FixedPositionTable', label: '表格input'}, 
  {value: 'QrCode', label: '二维码'},
  {value: 'MarkdownDisplay', label: 'Markdown展示'},
  {value: 'RenderTable', label: '表格渲染column更改' },
  {value: 'RenderTableRow', label: '表格渲染row更改'},
  {value: 'RenderTableCell', label: '表格渲染cell更改'},
  {value: 'RenderTableSort', label: '表格渲染顺序'},
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
    <RenderTable v-if="activeComponent === 'RenderTable'" />
    <RenderTableRow v-if="activeComponent === 'RenderTableRow'" />
    <RenderTableCell v-if="activeComponent === 'RenderTableCell'" />
    <RenderTableSort v-if="activeComponent === 'RenderTableSort'" />
  </div>
</template>

<style scoped lang="less">

</style>
