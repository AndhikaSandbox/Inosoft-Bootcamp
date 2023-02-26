<script setup lang="ts">
import type { ShopItemTypes } from '@/data/shopData';
import shopData from '@/data/shopData';
import ShopItem from '@/components/ShopItem.vue';

import store from '@/store';
import { mapGetters } from 'vuex';
</script>

<template>
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

	<RouterLink
		to="/cart"
		class="flex justify-center self-stretch rounded-md bg-blue-500 px-5 py-2 text-base font-semibold text-white"
		>Go To Cart</RouterLink
	>
</template>

<script lang="ts">
export default {
	components: {
		ShopItem,
	},

	methods: {
		addItem(item: ShopItemTypes) {
			store.commit('addItem', item);
		},
	},

	computed: {
		...mapGetters(['shopList']),
	},
};
</script>
