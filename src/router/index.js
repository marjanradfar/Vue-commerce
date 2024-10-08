import {createRouter, createWebHistory} from "vue-router";
import Home from "@/page/Home.vue";
import Product from "@/page/Product.vue";
import SignUp from "@/page/SignUp.vue";
import Blog from "@/page/Blog.vue";
import Shop from "@/page/Shop.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,

        },
        {
            path: "/Product",
            name: "product",
            component: Product,
        },
        {
            path: "/signUp",
            name: "signUp",
            component: SignUp,
            meta: {
                header: false,
                footer: false,
                navOff:false
            }
        },
        {
            path: "/",
            name: "Product",
            component: Product,

        },
        {
            path: "/blog",
            name: "blog",
            component: Blog,

        },
        {
            path: "/shop",
            name: "shop",
            component: Shop,

        },
    ],
});

export default router;
