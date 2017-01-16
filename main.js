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
  $scope.picAddress = "http://cdn.fishki.net/upload/post/201407/18/1286305/004.jpg"
  $scope.highwayName = 'US Route 1'
  $scope.highwayDescription = 'U.S. Route 1 (US 1) is a major north–south U.S. Highway that serves the East Coast of the United States. It runs 2,369 miles (3,813 km), from Fort Kent, Maine, at the Canada–US border, south to Key West, Florida, making it the longest north-south road in the United States.[2] US 1 is generally paralleled by Interstate 95, though the former is significantly farther west (inland) between Jacksonville, Florida, and Petersburg, Virginia. The highway connects most of the major cities of the east coast, including Miami, Richmond, Washington, D.C., Baltimore, Philadelphia, New York City, and Boston, passing from the Southeastern United States to New England.'
})

app.controller('rt101Ctrl', function($scope) {
  $scope.picAddress = "http://cdn.newsday.com/polopoly_fs/1.10666555.1437659497!/httpImage/image.JPG_gen/derivatives/display_960/image.JPG"
  $scope.highwayName = 'US Route 101'
  $scope.highwayDescription = 'U.S. Route 101, or U.S. Highway 101 (US 101) is a north–south United States Numbered Highway that runs through the states of California, Oregon, and Washington, on the West Coast of the United States. It is also known as El Camino Real (The Royal Road) where its route along the southern and central California coast approximates the old trail which linked the Spanish missions, pueblos, and presidios. It merges at some points with California State Route 1 (SR 1).'
})
