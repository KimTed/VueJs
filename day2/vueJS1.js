//v-bind:test='message'
Vue.component('custom-component',{
	props: ['test'],
	template: '<p>{{test}}</p>'
});

new Vue({
	el: '#wrap',
	data:{
		message: 'Hellow Vue!! passed from parent Component'
	}
});

// v-on:$emitparam = "상위 호출 function"
Vue.component('child-component',{
	template: '<button v-on:click="showLog">test!!   props data = {{parentmessage}}</button>',
	props: ['parentmessage'],
	methods: {
		showLog: function(){
			console.dir(this);
			this.$emit('test');
		}
	}
});

var app = new Vue({
	el: '#app',
	data: {
		message: 'what the hell~'
	},
	methods: {
		printText: function() {
			console.log("revived an event");
		}
	}
});


var eventBus = new Vue();


Vue.component('ebus-child-componet', {
	template: '<div>하위 컴포넌트 영역입니다.<br><button v-on:click="showLog">show</button></div>',
	methods: {
		showLog: function() {
			eventBus.$emit('triggerEventBus',100);
		}
	}
});

//안됨.... reuturn 을 안해주기 때문에...
//sharing data test_ using vue insatance
// Vue.component('custom-comp', {
// 	template: '<p class="test">sharing data {{returnData}}</p>',
// 	data: function(){
// 		var returnobj = {'returnData': 1};
// 		eventBus.$on('triggerEventBus', function(val){
// 			debugger;
// 			returnobj = {'returnData': val};
// 		});
// 		return returnobj;
// 	}
// });

var tmpVue = new Vue({
	el: '#evntBus',
	data: {
		tmp: 1
	},
	components: {
		'localcom1': {template: '<p>{{tmp}}</p>'}
	},
	
	created: function(){
		eventBus.$on('triggerEventBus', function(val){
			// debugger;
			console.dir(this);
			console.log("이벤트 전달 받은 값: " + val);
			tmpVue.tmp = val;
		});
	}
});


