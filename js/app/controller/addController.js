define(['app', 'service/contacts'], function (app, contacts) {
	app.controller('addController', function ($scope, contacts) {
		$scope.addUser = function () {
			contacts.addContacts($scope.user);
		}
	});
});