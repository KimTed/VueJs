var localComp1 = {
	template: '<p>This is first local component</p>'
};

var localComp2 = {
	template: '<p>This is second local component</p>'
};

Vue.component('globalcom', {
	template: '<h3>This is first global component</h3>'
});

new Vue({
	el: '#wrap',
	data: {
		goal: '오늘 배운것들 복습'
	},
	components: {
		'localcom1': localComp1,
		'localcom2': localComp2
	}
});

new Vue({
	el: '#wrap2'
});