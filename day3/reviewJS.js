//View router tutorial
/*
var mainTemp = {template: '<div>This is main template</div>'},
	loginTemp = {template: '<div>This is login template</div>'};

var routes = [
	{
		path: '/main',
		component: mainTemp
	},
	{
		path: '/login',
		component: loginTemp
	}
];

var router = new VueRouter({
	routes
});

new Vue({
	router
}).$mount('#app');
*/

//Nested view router
/*
var titleTemp = {template: '<div>This is titleTemp <router-view></router-view></div>'},
	loginTemp = {template: '<div>This is login</div>'},
	mainTemp = {template: '<div>This is main</div>'};

var routes = [
	{
		path: '/',
		component: titleTemp,
		children: [
			{
				path: 'login',
				component: loginTemp
			},
			{
				path: 'main',
				component: mainTemp
			}
		]
	}

];

var router = new VueRouter({
	routes
});

new Vue({
	router
}).$mount('#app');
*/

//Named view router
var head = {template: '<div> This is Header</div>'},
	body = {template: '<div> This is Body</div>'},
	foot = {template: '<div> This is Footer</div>'},
	loginHead = {template: '<div> This is Login Header</div>'},
	loginBody = {template: '<div> This is Login Body</div>'},
	loginFoot = {template: '<div> This is Login Footer</div>'};

var routes = [
	{
		path: '/',
		components: {
			default: head,
			body: body,
			footer: foot
		} 
	},
	{
		path: '/login',
		components: {
			default: loginHead,
			body: loginBody,
			footer: loginFoot
		}
	}
];

var router = new VueRouter({
	routes
});

new Vue({
	router
}).$mount('#app');