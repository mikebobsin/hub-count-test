import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Shipping from "../views/Shipping";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/shipping",
        name: "Shipping",
        component: Shipping,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
