<script setup lang="ts">
import store from '@/store';
import type { ShopItemTypes } from '@/data/shopData';
import ShopItem from '@/components/ShopItem.vue';
import { mapGetters, mapState } from 'vuex';
</script>

<template>
	<div class="flex flex-1 flex-col gap-5 rounded-md border-2 py-5 px-6 max-xl:self-stretch">
		<h1 class="font-sans text-xl font-bold">Summary</h1>
		<span class="rounded-sm border"></span>

		<template v-if="cartList.length === 0">
			<div class="grid min-h-[206px] place-items-center">
				<p class="font-sans text-xl font-semibold">No Item in Cart</p>
			</div>
		</template>

		<template v-else>
			<div class="flex flex-col gap-5">
				<ShopItem
					v-for="item in cartList"
					:key="item.id"
					:item="item"
					:useImage="false"
					@removeItem="removeItem(item)"
				/>
			</div>

			<div class="flex flex-col gap-5">
				<span class="rounded-sm border"></span>

				<div class="flex items-center justify-between gap-2 py-2 px-6">
					<h1 class="font-sans text-2xl font-semibold">Total Price</h1>

					<p class="font-sans text-xl font-bold">
						Rp.&nbsp;{{ totalPrice.toLocaleString() }}
					</p>
				</div>
			</div>
		</template>
	</div>

	<RouterLink
		to="/"
		class="flex justify-center self-stretch rounded-md bg-blue-500 px-5 py-2 text-base font-semibold text-white"
		>Go To Shop</RouterLink
	>
</template>

<script lang="ts">
export default {
	components: {
		ShopItem,
	},

	methods: {
		removeItem(item: ShopItemTypes) {
			store.commit('removeItem', item);
		},
	},

	computed: {
		...mapGetters(['cartList']),

		getCartList() {
			return store.state.cartList;
		},

		totalPrice() {
			return this.getCartList.map(item => item.price * item.stock).reduce((a, b) => a + b, 0);
		},
	},
};
</script>
