var app = angular.module("behaviorApp", [])

app.directive("enter", function() {
  return function(scope, el, classes) {
    el.bind("mouseenter", function() {
      el.addClass(classes.enter);
    })
  }
})

app.directive("leave", function() {
  return function(scope, el, classes) {
    el.bind("mouseleave", function() {
      el.removeClass(classes.enter);
    })
  }
})
