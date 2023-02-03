<template>
	<div
		class="relative flex flex-col gap-6 p-3 pt-1 pb-6 after:absolute after:bottom-0 after:left-0 after:min-h-[1px] after:min-w-full after:rounded-sm after:border last-of-type:pb-1 last-of-type:after:hidden sm:flex-row"
	>
		<template v-if="useImage === true">
			<img
				class="max-h-[auto] max-w-[100%] sm:max-h-[92px] sm:max-w-[92px]"
				:src="item.image"
				alt=""
			/>
		</template>

		<div class="flex flex-1 flex-col justify-between gap-8 p-3 sm:gap-0">
			<div class="flex flex-col gap-2">
				<h1 class="font-sans text-base font-semibold">
					{{ item.name }}
				</h1>

				<p class="font-sans text-sm font-bold">
					Rp.&nbsp;{{ item.price.toLocaleString() }}
				</p>
			</div>

			<div class="flex flex-col gap-3 sm:flex-row sm:justify-end">
				<template v-if="isCartItem">
					<p class="p-1">Available Stock : {{ item.stock }}</p>

					<button
						class="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-600 disabled:opacity-50 sm:py-0"
						:disabled="item.stock === 0"
						@click="$emit('addItem')"
					>
						Add To Cart
					</button>
				</template>

				<template v-else>
					<p class="p-1">Quantity : {{ item.stock }}</p>

					<button
						class="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white sm:py-0"
						@click="$emit('removeItem')"
					>
						Remove from Cart
					</button>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
		useImage: {
			type: Boolean,
			default: true,
		},
	},

	computed: {
		isCartItem() {
			return this.$attrs.onRemoveItem === undefined;
		},
	},
};
</script>
