var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/addresses', {
      templateUrl:'views/address.html',
      controller:'addressController'
    })
    .when('/orders', {
      templateUrl:'views/orders.html',
      controller:'ordersController'
    })

    $locationProvider.html5Mode(true);

}]);

app.controller('addressController', ['$scope', '$http', 'UserService', function($scope, $http, UserService){
   $scope.data = {};
   UserService.getUsers().success(function(data){
     $scope.data = data;
   });


   $scope.userAddresses = {};

   $scope.updateAddresses = function (id) {
       $http.get('/api/getAddresses/' + id).then(function(response){
           $scope.userAddresses = response.data;
       });
   };

}]);

app.controller('ordersController', ['$scope', function($scope){

}]);

app.factory('UserService', ['$http', function($http){
  return {
      getUsers : function() {
        return $http.get('/api/users');
      }
   }
}]);
