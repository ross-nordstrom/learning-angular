var app = angular.module('app', []);

var phoneAppStuff = {}

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

phoneAppStuff.directives = {}
phoneAppStuff.directives.panel = function() {
  return {
    restrict: "E"
  }
}

app.directive(phoneAppStuff.directives);
app.controller(phoneAppStuff.controllers);