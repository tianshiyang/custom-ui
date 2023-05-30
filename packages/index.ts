import { App } from 'vue'
import MyButton from './components/MyButton/index'

// 所有组件列表
const components = [
  MyButton
]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map(component => app.component(component.name, component))
}

// 导出所有template形式组件
export default {
  install
}

// 定义组件（template写法）的类型声明
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MyButton: typeof MyButton
  }
}