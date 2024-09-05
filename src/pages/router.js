import { createMemoryHistory, createRouter } from 'vue-router'

export const routes = [
    {
        id: 0,
        label: "Подборки",
        icon: "",
        path: '/recommendation',
        component: null,
    },
    {
        id: 1,
        label: "Чаи",
        icon: "",
        path: '/tea',
        component: null,
    },
    {
        id: 2,
        label: "Конструктор",
        icon: "",
        path: '/',
        component: null,
    },
    {
        id: 3,
        label: "Корзина",
        icon: "",
        path: '/cart',
        component: null,
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})