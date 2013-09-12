define(['app', 'service/contacts'], function(app, contacts) {
    app.controller('homeController', function($scope, contacts) {
        
        contacts.gg(function(data){
            $scope.listContacts = data;
        })
    
    });
});