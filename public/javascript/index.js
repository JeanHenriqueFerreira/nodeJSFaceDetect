var FaceDetect = angular.module('FaceDetect', ['ui.router', 'webcam']);

FaceDetect.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: "/login",
      views: {
        "login@": {
          templateUrl: "./templates/login.html",
          controller: "CtrlLogin",
        }
      }
    });
});

FaceDetect.controller('CtrlLogin', ['$scope', function($scope) {
  function init() {
    $scope.message = 'Olá!';
    $scope.realizarLogin = realizarLogin;
    $scope.obterNovaSenha = obterNovaSenha;
  }

  function realizarLogin() {
    console.log("realizarLogin");
  }

  function obterNovaSenha() {
    console.log("esqueciSenha");
  }

  init();
}]);