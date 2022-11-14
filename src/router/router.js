import { createRouter, createWebHistory } from "vue-router";

// import components
import PageOne from "@/Components/PageOne.vue";
import PageTwo from "@/Components/PageTwo.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/1', component: PageOne },
        { path: '/2', component: PageTwo },
    ]
});