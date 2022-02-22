import Back from '../views/Back/index.vue'
import Desk from '../views/Desk/index.vue'
const routes = [
	{ path: '/', redirect: '/desk' },
	{
		path: '/back',
		name: 'back',
		meta: { isAuth: true, isManage: true },
		component: Back,
		redirect: { name: 'order' },
		children: [
			{
				path: 'goods',
				name: 'goods',
				component: () => import('../views/Goods/GoodsManage.vue'),
				redirect: { name: 'goodsshow' },
				children: [
					{
						path: 'addgoods',
						name: 'addgoods',
						component: () => import('../views/Goods/AddGoods.vue')
					},
					{
						path: 'goodsshow',
						name: 'goodsshow',
						component: () => import('../views/Goods/GoodsShow.vue')
					}
				]
			},
			{
				path: 'customer',
				name: 'customer',
				component: () => import('../views/Customer/CustomerManage.vue'),
				redirect: { name: 'customershow' },
				children: [
					{
						path: 'customershow',
						name: 'customershow',
						component: () => import('../views/Customer/CustomerShow.vue')
					},
					{
						path: 'addcustomer',
						name: 'addcustomer',
						component: () => import('../views/Customer/AddCustomer.vue')
					}
				]
			},
			{
				path: 'order',
				name: 'order',
				component: () => import('../views/Back/OrderManage.vue')
			},
			{
				path: 'category',
				name: 'category',
				component: () => import('../views/Back/CategoryManage.vue')
			}
		]
	},
	{
		path: '/desk',
		name: 'desk',
		component: Desk,
		redirect: { name: 'home' },
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import('../views/Desk/Home.vue')
			},
			{
				path: 'login',
				name: 'login',
				component: () => import('../views/Desk/Login.vue')
			},
			{
				path: 'hot',
				name: 'hot',
				component: () => import('../views/Desk/Hot.vue')
			},
			{
				path: 'new',
				name: 'new',
				component: () => import('../views/Desk/New.vue')
			},
			{
				path: 'shopcart',
				name: 'shopcart',
				meta: { isAuth: true },
				component: () => import('../views/ShopCart/index.vue')
			},
			{
				path: 'pay/:shopCartId/:totalPrice',
				name: 'pay',
				meta: { isAuth: true },
				component: () => import('../views/ShopCart/Pay.vue')
			},
			{
				path: 'detail/:id',
				name: 'detail',
				component: () => import('../views/Desk/GoodsDetail.vue')
			},
			{
				path: 'goodscategory',
				name: 'goodscategory',
				component: () => import('../views/Desk/Category.vue')
			},
			{
				path: 'search/:keyword',
				name: 'search',
				component: () => import('../views/Desk/Search.vue')
			},
			{
				path: 'profile',
				name: 'profile',
				meta: { isAuth: true },
				component: () => import('../views/Profile/index.vue')
			}
		]
	}
]
export default routes
