import { createApp } from "vue";
import App from "./App.vue";

import { Button, Tabbar, TabbarItem, Icon, NavBar, Toast, Search,TreeSelect,Tag,Cell,CellGroup,Form, Field } from "vant";
import "vant/lib/index.css";
import router from "./router";

createApp(App)
  .use(router).use(Button).use(Tabbar).use(TabbarItem).use(Icon)
  .use(NavBar).use(Toast).use(Search).use(TreeSelect).use(Tag)
  .use(Cell).use(CellGroup).use(Form).use(Field)
  .mount("#app");
