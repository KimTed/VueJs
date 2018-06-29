//component network(Data: T->B)
Vue.component('child-component1', {
	props: ['parent'],
	template: '<p>CHILD_상위 컴포넌트에서 준 값: {{parent}}</p>'
});

Vue.component('sibling-component1', {
	props: ['parent1'],
	template: '<p>SIBLING_상위 컴포넌트에서 준 값: {{parent1}}</p>'
});

var app = new Vue({
	el: '#wrap1',
	data: {
		message: '이번에도 고생했습니다~.',
		messageToSibling: '너도 같이 고생했습니다.'
	}
});

//component network(Event: B->T)
Vue.component('parent-component2',{
	template: '<child-component2 v-on:eventNm="receiveEvnt"></child-component2>',
	methods: {
		receiveEvnt: function(){
			console.log("Receive Event~~~");
		}
	}
});

Vue.component('child-component2',{
	template: '<button v-on:click="occurEvnt">Occur Evnt</button>',
	methods: {
		occurEvnt: function() {
			this.$emit('eventNm');
		}
	}
});

new Vue({el: '#wrap2'});

// using Event Bus
var evntBus = new Vue();

Vue.component('child-component3', {
	template: '<button v-on:click="callSibling"> call Sibling </button>',
	methods: {
		callSibling: function(){
			evntBus.$emit('siblingfunc', 100);
		}
	},
	created: function() {
		evntBus.$on('childfunc', function(val){
			// debugger;
			console.log("call childfunc _ from sibling-component3");
			console.log(val);
		});
	}
});

Vue.component('sibling-component3', {
	template: '<button v-on:click="callChild"> call Child </button>',
	methods: {
		callChild: function(){
			evntBus.$emit('childfunc', 200);
		}
	},
	created: function(){
		evntBus.$on('siblingfunc', function(val){
			// debugger;
			console.log("call siblingfunc _ from child-component3");
			console.log(val);
		});
	}
});

new Vue({el: '#wrap3'});