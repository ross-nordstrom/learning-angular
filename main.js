var app = angular.module('app', []);

var phoneAppStuff = {}

/******************************************************************************
 * CONTROLLERS
 ***/
phoneAppStuff.controllers = {};
phoneAppStuff.controllers.RoomCtrl = function () {
  this.openDoor = function () {
    alert("creak");
  }

  this.buttonTitle = "I'm a dog";
  this.foo="bar";
}
phoneAppStuff.controllers.OtherCtrl = function () {
  this.openDoor = function () {
    alert("creak");
  }

  this.buttonTitle = "I'm a dog";
  this.foo="baz";
}

app.controller(phoneAppStuff.controllers);

/******************************************************************************
 * DIRECTIVES
 ***/
phoneAppStuff.directives = {}
phoneAppStuff.directives.panel = function() {
  return {
    restrict: "E"
  }
}

app.directive(phoneAppStuff.directives);

/******************************************************************************
 * FILTERS
 ***/
// Can't declare filters as an object, so declare them individually
app.filter('greet', function() {
  return function(name) {
    return 'Hello, '+name+'!';
  }
})