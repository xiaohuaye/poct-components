<script setup lang="ts">
import { ref, reactive } from 'vue';
import { cloneDeep } from 'lodash-es';
import type { UnwrapRef } from 'vue';

const columns = [
  {
    title: '样本类型',
    dataIndex: 'sampleType',
    width: '15%',
  },
  {
    title: '容器类型',
    dataIndex: 'containerType',
    width: '15%',
  },
  {
    title: '是否穿刺',
    dataIndex: 'puncture',
    width: '20%',
  },
  {
    title: '屏蔽空吸',
    dataIndex: 'emptySuction',
    width: '20%',
  },
  {
    title: '操作',
    dataIndex: 'operation',
  },
];
interface DataItem {
  key: string;
  sampleType: string;
  containerType: string;
  puncture: boolean;
  emptySuction: boolean;
}
const data: DataItem[] = [];
const containers: string[] = [];

const sampleType = [
    "全血"
    , "血浆"
    , "血清"
    , "血清/血浆"
    , "末梢血"
    , "鼻/咽拭子"
    , "阴道分泌物"
    , "尿液"
    , "质控"
    , "其他"
  ]

for (let i = 0; i < sampleType.length; i++) {
  data.push({
    key: `${sampleType[i]}`,
    sampleType: `${sampleType[i]}`,
    containerType: `容器${i + 1}`,
    puncture: false,
    emptySuction: false,
  });

  containers.push(`容器${i + 1}`)
}

const dataSource = ref(data);
const editableData: UnwrapRef<any> = reactive({});

const edit = (key: string) => {
  editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
};
const save = (key: string) => {
  Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
  delete editableData[key];
  console.log('dataSource', dataSource.value);
};
const cancel = (key: string) => {
  delete editableData[key];
};

</script>

<template>
  <div>
    <a-table :columns="columns" :data-source="dataSource" bordered :pagination="false" :scroll="{y: '500px'}">
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'containerType'">
        <div class="editable-row-operations">
          <a-select  v-if="editableData[record.key]" v-model:value="editableData[record.key][column.dataIndex]">
            <a-select-option v-for="item in containers" :key="item" :value="item">{{item}}</a-select-option>
          </a-select>
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'puncture'">
        <div class="editable-row-operations">
          <a-select  v-if="editableData[record.key]" v-model:value="editableData[record.key][column.dataIndex]">
            <a-select-option key="true" :value="true">穿刺</a-select-option>
            <a-select-option key="false" :value="false">不穿刺</a-select-option>
          </a-select>
          <template v-else>
            {{ text ? '穿刺' : '不穿刺' }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'emptySuction'">
        <div class="editable-row-operations">
          <a-select  v-if="editableData[record.key]" v-model:value="editableData[record.key][column.dataIndex]">
            <a-select-option key="true" :value="true">屏蔽</a-select-option>
            <a-select-option key="false" :value="false">不屏蔽</a-select-option>
          </a-select>
          <template v-else>
            {{ text ? '屏蔽' : '不屏蔽' }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-button class="btnDefault" @click="save(record.key)" >保存</a-button>
            <a-button class="btnDefault" @click="cancel(record.key)">取消</a-button>
          </span>
          <span v-else>
            <a-button @click="edit(record.key)" class="btnDefault">修改</a-button>
          </span>
        </div>
      </template>
    </template>
  </a-table>
  </div>
</template>

<style scoped lang="less">
  .editable-row-operations a {
  margin-right: 8px;
}

.btnDefault {
  width: 40 * @vpx;
  height: 25 * @vpx;
  font-size: @small-font-size;
}
</style>
