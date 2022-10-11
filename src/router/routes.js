const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: () => import('@/components/common/HelloWorld'),
	},
	{
		path: '/columns',
		name: 'Columns',
		component: () => import('@/components/Columns'),
	},
	{
		path: '/flex-row',
		name: 'FlexRow',
		component: () => import('@/components/FlexRow'),
	},
	{
		path: '/list',
		name: 'List',
		component: () => import('@/components/List'),
	},
	{
		path: '/list-inline',
		name: 'ListInline',
		component: () => import('@/components/ListInline'),
	},
	{
		path: '/challenge-page',
		name: 'ChallengePage',
		component: () => import('@/components/ChallengePage.vue'),
	},
]

export default routes;