var app = angular.module("app", []);

app.config(function($logProvider){
  $logProvider.debugEnabled(false);
});

app.run(function($rootScope, $log){
  $rootScope.$log = $log;
});