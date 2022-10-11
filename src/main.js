import Vue from 'vue'
import App from './App.vue'

import LayoutAbsolute from './components/layout/LayoutAbsolute';
import LayoutAlign from './components/layout/LayoutAlign';
import LayoutColumns from './components/layout/LayoutColumns';
import LayoutFlexColumn from './components/layout/LayoutFlexColumn';
import LayoutFlexRow from './components/layout/LayoutFlexRow';
import LayoutGrid from './components/layout/LayoutGrid';
import LayoutList from './components/layout/LayoutList';
import LayoutListInline from './components/layout/LayoutListInline';

import 'vue-layout-system/dist/vue-layout-system.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: {
    LayoutAbsolute,
    LayoutAlign,
    LayoutColumns,
    LayoutFlexColumn,
    LayoutFlexRow,
    LayoutGrid,
    LayoutList,
    LayoutListInline,
  },
}).$mount('#app')
