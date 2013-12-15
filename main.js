angular.module("phoneApp", [])
  .controller('AppCtrl', function($scope){
    $scope.leaveVoicemail = function(number, message){
      alert('Number: ' + number + ' said: ' + message);
    };
  })

  .directive('phone', function(){
    return {
      restrict: 'E',
      scope: {
        number: '@',
        network: '=',
        makeCall: '&'
      },
      template: '<div>'+
          'Number: {{number}}'+
          'Network:<select ng-model="network" ng-options="net for net in networks"></select>'+
        '</div>'+
        '<input type="text" ng-model="value">'+
        '<div class="button" ng-click="makeCall({message: value, number: number})">'+
          'Call Home!'+
        '</div>',
      link: function(scope){
          scope.networks = ["Verizon", "AT&T", "Sprint"];
          scope.network = scope.networks[0];
        }
    };
  });