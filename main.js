angular.module("drinkApp", [])
  .controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry"

  })
  .directive("drink", function() {
    return {
      scope: {
        flavor: "="
      },
      template: '<input type="text" ng-model="flavor">'
    }
  })