const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: () => import('@/components/HelloWorld'),
	},
	{
		path: '/challenge-page',
		name: 'ChallengePage',
		component: () => import('@/components/ChallengePage.vue'),
	},
]

export default routes;