import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/HomePage";
import About from "./views/AboutPage";
import PropsEmit from "./views/PropsEmitPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/propsemit",
            component: PropsEmit,
        },
    ],
});
export default router;