(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.status = {};
		o.getMessage = function() {
			$http.get('/message').success(function(res) {
				o.status.message = res;
			});
		};
		o.getOther = function() {
			$http.get('/otherMessage').success(function(res) {
				o.status.message = res;
			});
		};
		o.createMessage = function(msg) {
			var q = $q.defer();
			$http.post('/message', {message: msg}).success(function(res) {
				q.resolve();
			});
			return q.promise;
		};
		o.getMessage();
		return o;
	}
})();