import { createApp } from 'vue'
import App from './App.vue'
import { ElButton } from "element-plus"
import 'element-plus/dist/index.css'
// import customUI from "custom-ui-plus"
import customUI from "../packages/index"
// import "custom-ui-plus/lib/index.d.ts"

createApp(App).use(ElButton).use(customUI).mount('#app')
