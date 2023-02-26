import shopData, { type ShopItemTypes } from '@/data/shopData';

import Vuex from 'vuex';

const store = new Vuex.Store({
	state: {
		shopList: shopData,

		cartList: [] as ShopItemTypes[],
	},

	getters: {
		shopList(state) {
			return state.shopList;
		},
		cartList(state) {
			return state.cartList;
		},
	},

	mutations: {
		addItem(state, item: ShopItemTypes) {
			if (item.stock === 0) return;

			const cartItem = state.cartList.find(i => i.id === item.id);
			if (!cartItem) {
				const newItem = { ...item, stock: 1 };
				state.cartList.push(newItem);
				item.stock--;
			} else {
				cartItem.stock++;
				item.stock--;
			}
		},
		removeItem(state, item: ShopItemTypes) {
			const cartItem = state.cartList.find(i => i.id === item.id);
			if (!cartItem) return;

			cartItem.stock--;
			if (cartItem.stock === 0) state.cartList.splice(state.cartList.indexOf(cartItem), 1);

			const shopItem = state.shopList.find(i => i.id === item.id);
			if (shopItem) shopItem.stock++;
		},
	},
});

export default store;
