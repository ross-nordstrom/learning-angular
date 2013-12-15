angular.module("eventApp", [])
  .controller('EventController', function($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function() {
      $scope.count++;
      if($scope.count > 10) {
        $scope.$destroy();
      }
    })
  })
