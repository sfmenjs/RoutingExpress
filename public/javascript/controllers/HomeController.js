(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory'];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.status = HomeFactory.status;
		vm.getMessage = HomeFactory.getMessage;
		vm.getOther = HomeFactory.getOther;
	}
})();