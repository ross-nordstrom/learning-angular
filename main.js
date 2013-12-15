angular.module("drinkApp", [])
  .controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry"

  })
  .directive("drink", function() {
    return {
      scope: {
        flavor: "@"
      },
      template: '<div>{{flavor}}</div>'
    }
  })