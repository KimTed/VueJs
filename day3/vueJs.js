//Tutorial View router
/*
var Main = {
		template: '<div>main _ local Data: {{mainTemp}}</div>',
		data: function(){
			return {mainTemp: "This is mainTmp Data"};
		}
	},
	Login = {
		template: '<div>login _ local Data: {{loginTemp}}</div>',
		data: function(){
			return {loginTemp: "This is loginTmp Data"};
		}
};

var routes = [
	{path: '/main', component: Main},
	{path: '/login', component: Login}
];

var router = new VueRouter({
	// mode: 'history',
	routes

});

var app = new Vue({
	router,
	data: {
		appData: "this is app data"
	}
}).$mount('#app');
*/

//nested View router: 여러개 개의 컴포넌트를 동시에 표시

var User = {
		template: '<div>User component<router-view></router-view></div>'
		// '<div>'+
		// '	User component'+
		// '	<router-view></router-view>'+
		// '</div>'
	},
	UserProfile = {
		template: '<p>User Profile Component</p>'
	}, 
	UserPost ={
		template: '<p>Usert Post component</p>'
	};

var routes = [
	{
		path: '/user',
		component: User,
		children: [
			{
				path: 'posts',
				component: UserPost
			},
			{
				path: 'profile',
				component: UserProfile
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


//Named view router: 한 번에 더 많은 컴포넌트를 표시
/*
var Header = {template: '<div>This is Header</div>'},
	Body = {template: '<div>THis is Body</div>'},
	Footer = {template: '<div>This is Footer</div>'};

var router = new VueRouter({
	routes: [
		{
			path: '/',
			components: {
				header: Header,
				default: Body,
				footer: Footer
			}
		}
	]
});

new Vue({
	router
}).$mount('#app');
*/