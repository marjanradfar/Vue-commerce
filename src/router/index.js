import { createRouter, createWebHistory } from "vue-router";
import Home from  "../page/Home.vue";
import Product from  "../page/Product.vue";

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

    ],
});

export default router;
