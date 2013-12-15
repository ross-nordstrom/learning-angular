var app = angular.module("twitterApp", [])

app.controller("AppCtrl", function($scope) {
  $scope.loadMoreTweets = function() {
    alert("Loading tweets!");
  }
})

app.directive("enter", function() {
  return function(scope, el, attrs) {
    el.bind("mouseenter", function() {
      scope.$apply(attrs.enter);
    })
  }
})