import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/shop/index.vue'),
		},

		{
			path: '/cart',
			name: 'cart',
			component: () => import('@/views/cart/index.vue'),
		},
	],
});

export default router;
