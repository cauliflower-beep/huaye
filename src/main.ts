import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMarkdownEditor from "@/plugins/markdownEditor";

const app = createApp(App)

app.use(router).use(VueMarkdownEditor).mount('#app')
