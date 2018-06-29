Vue.component('my-globalcomponet',{
	template: '<h1>전역 컴포넌트 등록</h1>'
});

new Vue({
//	el: '#vue-app',
/*	data: {
		name: 'Ted',
		job: 'programers',
		website: 'https://www.naver.com',
		websiteTag: '<a href="https://www.google.com"> go to google </a>'
	},
	methods: {
		greet: function(str) {
			// debugger;
			console.dir(this);
			// console.log(name);
			console.log(this.name);

			return "Good " + str;
		}
	}
*/

/*	data:{
		age: 30
	},
	methods: {
		add: function(num){
			// alert(age);
			this.age += num;
		},
		subtract: function(num){
			this.age -= num;
		}
	}
*/

/*
	//test for VueJS Life Cycle
	data: {
		message: "Hello Vue js!"
	},
	beforeCreate: function(e){
		debugger;
		console.log("beforeCreate");
	},
	created: function(e) {
		debugger;
		console.log("created");
	},
	beforeMount: function(e){
		debugger;
		// this.message = "바꾸기1";
		console.log("'beforeUpdate' and 'updated' not working when this.message chaged");
		console.log("beforeMount");
	},
	mounted: function(e) {
		debugger;
		// this.message = "바꾸기2";
		console.log("'beforeUpdate' and 'updated' working when this.message chaged");
		console.log("mounted");
	},
	beforeUpdate: function(e) {
		debugger;
		console.log("beforeUpdate");
	},
	updated: function(e){
		debugger;
		console.log("updated");
	},
	beforeDestroy: function(e) {
		debugger;
		console.log("beforeDestroy");
	},
	destroyed: function(e) {
		debugger;
		console.log("destroyed");
	}
*/

	el: '#app',
	data: {
		string: "this is main Vue data"
	},
	components: {
		'my-localcomponent': {template: "<div> 지역 컴포넌트가 등록되었습니다.</div>"}
	},
	beforeCreate: function(e){
		debugger;
		console.log("beforeCreate");
	},
	created: function(e) {
		debugger;
		console.log("created");
	},
	beforeMount: function(e){
		debugger;
		// this.message = "바꾸기1";
		console.log("'beforeUpdate' and 'updated' not working when this.message chaged");
		console.log("beforeMount");
	},
	mounted: function(e) {
		debugger;
		// this.message = "바꾸기2";
		console.log("'beforeUpdate' and 'updated' working when this.message chaged");
		console.log("mounted");
	},
	beforeUpdate: function(e) {
		debugger;
		console.log("beforeUpdate");
	},
	updated: function(e){
		debugger;
		console.log("updated");
	},
	beforeDestroy: function(e) {
		debugger;
		console.log("beforeDestroy");
	},
	destroyed: function(e) {
		debugger;
		console.log("destroyed");
	},
	errorCaptured: function() {
		debugger;
		console.log("errorCaptured");
	}
});

new Vue({
	el: '#app1'
});