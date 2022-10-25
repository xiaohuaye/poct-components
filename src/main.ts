import { createApp } from 'vue'
import '@/style/index.less'
import 'ant-design-vue/dist/antd.less';
import App from './App.vue'

import {
  AutoComplete,
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  Divider,
  Drawer,
  Empty,
  Form,
  Input,
  InputNumber,
  Layout,
  List,
  Menu,
  Modal,
  Pagination,
  Popover,
  Progress,
  Radio,
  Row,
  Select,
  Skeleton,
  Space,
  Spin,
  Switch,
  Table,
  Tabs,
  Tag,
  Tooltip,
  message,
  Carousel,
} from 'ant-design-vue';

export const app = createApp(App);

app.use(Layout)
  .use(ConfigProvider)
  .use(Button)
  .use(Menu)
  .use(Table)
  .use(Space)
  .use(Input)
  .use(Modal)
  .use(Card)
  .use(Form)
  .use(Switch)
  .use(Select)
  .use(Progress)
  .use(InputNumber)
  .use(Tabs)
  .use(Divider)
  .use(Radio)
  .use(Checkbox)
  .use(Row)
  .use(Col)
  .use(Tag)
  .use(Spin)
  .use(Tooltip)
  .use(List)
  .use(Popover)
  .use(Skeleton)
  .use(Drawer)
  .use(Empty)
  .use(AutoComplete)
  .use(Carousel)
  .use(Pagination);

  app
  .mount('#app');
