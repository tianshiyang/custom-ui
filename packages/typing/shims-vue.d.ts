declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<unknown, unknown>, Record<unknown, unknown>, unknown>
  export default component
}

declare module 'custom-ui-plus';