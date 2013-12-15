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
A common problem in angular apps is scope conflicts. These occur because directives are typically made for reuse
(such as element or attribute reuse), which means you want to use the same directive many times in a given page,
but probably don't want them influencing each other. Isolating the scope in your directives can help with this.
First, a basic example of isolating scope in a directive:

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

### Attribute Binding (@)
I think this is basically a good clean way to do argument passing from the parent scope to the directive.

### Bi-directional Binding (=)
For example, if you `=` bind on a model, updating the model outside of the directive will update
the model inside, and vice versa.

### Bind to Parent Scope (&)
Similar to `@`, but on the entire scope. Note that changing the scope within `&`-bound directive won't affect the parent scope.

## Common Pitfalls
Some common pitfalls pointed out by the [AngularJS docs](http://docs.angularjs.org/misc/faq#commonpitfalls). 

### Reinventing the Wheel
They most frequently occur when trying to use jQuery to do common tasks...

#### ng-repeat
Don't use jQuery's iterator. Just setup ng-repeat on an array, and modify the array

#### ng-show
Toggling an element's visibility is a common task. AngularJS provides a technique for this by setting the `ng-show` attribute
to be based on a boolean var

```HTML
<div ng-show="!loggedIn">Click <a href="#/login">here</a> to log in</div>
```

#### ng-class
Conditionally applying a class is another frequent task. AngularJS allows you to do this with boolean vars sort of like above:

```HTML
<div ng-class="{ errorClass: isError, warningClass: isWarning, okClass: !isError && !isWarning }">...</div>
```

*Note:* They also provide `ng-class-even`, `ng-class-odd`, and `ng-style`

### Combing ng-repeat with other directives
`ng-repeat` is very powerful. In fact its power lies in the fact that it heavily modifies the DOM, so if you want to edit
attributes of something having to do with ng-repeat, it's best to add elements.

 * To apply a directive to the whole repeat, wrap the repeat in a parent element
 * To apply a directive to each inner piece of the repeat, put it on a child of the ng-repeat element
