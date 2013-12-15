LearningAngular
===============

Trying to learn AngularJS, and hopefully some integrations with Phonegap

# Foundation
This is heavily driven by [A Better Way to Learn AngularJS](http://www.thinkster.io/pick/GtaQ0oMGIl/)

# Lessons
Tid-bits I learned from the tutorial, or from resources the tutorial (or ideas in the tutorial) led me to.

## TDD
Yea, that's right... you can TDD javascript. In fact, that's one of the shiny, attractive features of AngularJS - it works really well with testing.

## Imperitive vs Declarative Code
In short, we are most familiar with Imperitive code -- telling a computer _how_ to do things. Declarative code -- telling a computer _what_ end result we want -- is something most coders at once don't understand and yet are experienced with. SQL is actually a declarative language; D3.js is as well. Recognizing D3 as a declarative language helps explain the difficulty of learning it.

AngularJS, it turns out, is a proponent of declarative coding. Using declarative programming also helps make it so compatible with testing.

Please see [Imperative vs Declarative](http://latentflip.com/imperative-vs-declarative/) for more.

## Functional Programming
Keep `$scope` out of your methods as much as possible. By keeping methods functional (independent of program state), we make it easier to write tests.

## Isolate Scope
A common problem in angular apps is scope conflicts. Isolating the scope in your directives can help with this. First, a basic example of isolating scope in a directive:

`index.html`
```HTML
<div ng-app="choreApp">
  <div ng-controller="ChoreCtrl">
      <!-- If scope is not set correctly,
         each of these will interact, but
         we want them to be isolated -->
      <kid done="logChore(chore)"></kid>
      <kid done="logChore(chore)"></kid>
      <kid done="logChore(chore)"></kid>
   </div>
</div>
```

`main.js`
```JavaScript
app.controller("ChoreCtrl", function($scope){
  $scope.logChore = function(chore){
      alert(chore + " is done!");
   };
});
   
app.directive("kid", function() {
   return {
      restrict: "E",
      scope: {
         done: "&"
      },
      template: '<input type="text" ng-model="chore">' +
         '{{chore}}' +
         '<div class="button" ng-click="done({chore: chore})">I\'m done</div>'
   };
});
```
