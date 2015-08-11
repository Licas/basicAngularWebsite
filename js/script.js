
var app = angular.module("computersolution", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider
   .when('/main', {
     templateUrl:'main.html',
     controller: 'MainCtrl'
   })
   .when('/about', {
     templateUrl:'about.html',
     controller: 'MainCtrl' //no dynamic content, no specific controller
   })
   .when('/contact', {
     templateUrl:'contact.html',
     controller: 'ContactCtrl'
   })
   .when('/services', {
     templateUrl:'services.html',
     controller: 'ServicesCtrl'
   })
   .otherwise({ redirectTo:'main' });

}])

.controller('MainCtrl',  ['$scope', '$http', function($scope, $http){
  $http.get('data/services.json')
        .then(function(res){
            console.log(res.data);
            $scope.services = res.data;
        });

}])
.controller('ContactCtrl',  ['$scope', '$http',function($scope, $http){
    $http.get('data/locations.json')
        .then(function(res){
            console.log(res.data);
            $scope.locations = res.data;
        });

}])
.controller('ServicesCtrl',  ['$scope', '$http', function($scope, $http){
    $http.get('data/services.json')
        .then(function(res){
            console.log(res.data);
            $scope.services = res.data;
        });
}]);
