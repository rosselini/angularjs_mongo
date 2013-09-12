define(['app', 'underscore'], function(app, _) {
    app.factory('contacts', function ($http) {

        //$scope.headers = ["firstName", "lastName", "phone", "address"];
  

        return {
            gg: function(callback) {
                $http.get('http://localhost:1224/api/contacts').success(function (data, status, headers, config) {
                    callback(data);
                });
            },
            gett: function(id, callback) {
                $http.get('http://localhost:1224/api/contact/' + id).success(function (data, status, headers, config) {
                    callback(data);
                });
            },
            addContacts: function(user) {
                $http.post('http://localhost:1224/api/add', user).success(function (data) {

                });
                console.log(user);    
            }
        };
    });
})

