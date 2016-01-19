(function() {
	'use strict';
	angular.module('app')
	.controller('AddMessageController', AddMessageController);

	AddMessageController.$inject = ['HomeFactory'];

	function AddMessageController(HomeFactory) {
		var vm = this;
		vm.createMessage = function() {
			HomeFactory.createMessage(vm.newMessage);
		};
	}
})();