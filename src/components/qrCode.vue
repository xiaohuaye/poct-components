<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import QRCode from 'qrcode';

const imageData = ref('')
const code = '0C2A082CB29C34122E027DE08DF240674A3192E4717A622D42A5115E24289A92ED51E01EEA51C58B3980284C97FAF3F204F9A173092F5D4C3EFBFCD4AF12C15DF43C275D65DD148D2215E3D16043728899DBA1611CFDE0BFC27AEB3A923BB4BC289A2ED07C50E2F197170A9B168AC3483489408711150D2586A4AC0829C22C60'

async function generateQR( text:string) {
  try {
    imageData.value = (await QRCode.toDataURL(text))
     console.log('data', imageData.value);
     
  } catch (err) {
    console.error(err)
  }
}

onMounted(()=>{
  generateQR(code)
})

</script>

<template>
  <div class="imgWrapper">
    <img :src="imageData" alt="未加载" @click="generateQR(code)"/>
  </div>
</template>

<style scoped lang="less">
  .imgWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
