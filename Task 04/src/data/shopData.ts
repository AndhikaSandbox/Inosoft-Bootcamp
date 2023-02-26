export interface ShopItemTypes {
	id: number;
	image: string;
	name: string;
	price: number;
	stock: number;
}

export const shopData: ShopItemTypes[] = [
	{
		id: 1,
		image: '/assets/images/ryzen-7-7700x.jpg',
		name: 'AMD Ryzen™ 7 7700X Desktop Processor | Ryzen 7000 Series 8-Cores AM5 CPU',
		price: 6249000,
		stock: 20,
	},
	{
		id: 2,
		image: '/assets/images/nzxt-h9-elite.jpg',
		name: 'NZXT H9 Elite | Premium Dual-Chamber Mid-Tower Airflow Case - Matte Black',
		price: 3999000,
		stock: 10,
	},
	{
		id: 3,
		image: '/assets/images/corsair-vengeance-2x16gb.jpg',
		name: 'Corsair Vengeance LPX 32GB (2x16GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - White',
		price: 1999000,
		stock: 5,
	},
];

export default shopData;
