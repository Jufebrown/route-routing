var app = angular.module('routeApp', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'partials/main.html'
  })
  .when('/route1', {
    controller: 'rt1Ctrl',
    templateUrl: 'partials/route1.html'
  })
  .when('/route101', {
    controller: 'rt101Ctrl',
    templateUrl: 'partials/route101.html'
  })
})

app.controller('MainCtrl', function($scope) {
  $scope.potatoes = 'baked!'
})

app.controller('rt1Ctrl', function($scope) {
  console.log('here is the list controller')
})

app.controller('rt101Ctrl', function($scope) {
  console.log('here is the list controller')
})
