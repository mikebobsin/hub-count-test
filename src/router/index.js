import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Shipping from "../views/Shipping";
import Error from "../views/Error";

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
    {
        path: "/404",
        name: "Error",
        component: Error,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
