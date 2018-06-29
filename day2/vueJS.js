var comp1 = {
	template: "<div>첫번째 지역 컴포넌트: {{returnData}}</div>",
	data: function(){
		return{
			returnData: 100
		}
	}
};

var comp2 = {
	template: "<div>두번째 지역 컴포넌트: {{returnData1}}</div>",
	data: function(){
		return{
			// returnData1: comp1.data()					// {"returnData": 100}
			returnData1: comp1.data().returnData			// 100
			// returnData1: comp1.data.returnData			//책 방식 (이해 X) -> error 없고 노출되는 없음
		}
	}
};

var comp3 = {
	data: function(){
		return {"pdata": "부모데이터"};	
	},
	template: "<h3>this is for communication between parentsComp and childComp<br>Data is {{pdata}}</h3>"
};

Vue.component('child-comp', {
	props: ['propsdata'],
	template: '<p>{{propsdata}}</p>'
});

new Vue({
	el:'.wrap1',
	data:{
		test: "이건 되겠지"
	},
	components:{
		'my-componet1': comp1,
		'my-componet2': comp2,
		'my-componet3': {
							data:function(){return{"pdata": "부모데이터"};},
							template: "<h3>this is for communication between parentsComp and childComp<br>Data is {{pdata}}<child-comp v-bind:propsdata='pdata'></child-comp></h3>"
						}
	}
});