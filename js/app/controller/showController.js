define(['app', 'service/contacts'], function(app, contacts) {
    app.controller('showController', function($scope, $routeParams, contacts) {
	var id=$routeParams.id;

    	contacts.gett(id, function (data) {
    		console.log(data);
    		$scope.contact = data;
    	});
        
        // Set function is click button
        $scope.viewUser = function (userName) {
            alert(userName);    
        }
        
        // Set variable form view 
        //$scope.contact = contacts.gett($routeParams.id);
    });
});