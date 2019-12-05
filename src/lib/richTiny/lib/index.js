import RichText from "./text.vue";

const myPlugin = {
  install(Vue) {
    Vue.component("rich-tiny", RichText);
  }
};

export default myPlugin;
