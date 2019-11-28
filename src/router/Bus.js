import Vue from "vue";
let eventBus = new Vue()
Vue.prototype.$EventBus = eventBus
export default eventBus
