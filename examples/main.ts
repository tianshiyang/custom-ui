import { createApp } from 'vue'
import App from './App.vue'
import { ElButton } from "element-plus"
import 'element-plus/dist/index.css'
import customUIPlus from "custom-ui-plus"

createApp(App).use(ElButton).use(customUIPlus).mount('#app')
