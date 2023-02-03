<script setup lang="ts">
import type { ShopItemTypes } from './data/shopData';
import shopData from './data/shopData';
import ShopItem from './components/ShopItem.vue';
</script>

<template>
	<div class="flex min-h-screen min-w-full flex-col items-start gap-6 p-6 xl:flex-row">
		<div
			class="flex flex-1 flex-col gap-5 self-stretch rounded-md border-2 py-5 px-6 xl:min-w-[60vw]"
		>
			<h1 class="font-sans text-xl font-bold">Shop Item List</h1>
			<span class="rounded-sm border"></span>

			<ShopItem
				v-for="item in shopList"
				:key="item.id"
				:item="item"
				:useImage="true"
				@addItem="addItem(item)"
			/>
		</div>

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
	</div>
</template>

<script lang="ts">
export default {
	components: {
		ShopItem,
	},

	data() {
		return {
			shopList: shopData,

			cartList: [] as ShopItemTypes[],
		};
	},

	methods: {
		addItem(_item: ShopItemTypes) {
			if (_item.stock === 0) return;

			if (!this.cartList.find(item => item.id === _item.id)) {
				let item = { ..._item };
				item.stock = 1;
				this.cartList.push(item);
				_item.stock--;
			} else {
				this.cartList.find(item => {
					if (item.id === _item.id) item.stock++;
					return item.id === _item.id;
				});
				_item.stock--;
			}
		},

		removeItem(_item: ShopItemTypes) {
			if (!this.cartList.includes(_item)) return;

			this.cartList.find(item => {
				if (item.id === _item.id) item.stock--;
				return item === _item;
			});

			if (_item.stock === 0) this.cartList.splice(this.cartList.indexOf(_item), 1);
			this.shopList.find(item => {
				if (item.id === _item.id) item.stock++;
				return item === _item;
			});
		},
	},

	computed: {
		totalPrice() {
			return this.cartList.map(item => item.price * item.stock).reduce((a, b) => a + b, 0);
		},
	},
};
</script>
