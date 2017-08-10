FaceDetect.config(function($stateProvider) {
  $stateProvider
    .state('detection', {
      url: "/detection",
      views: {
        "conteudo@": {
          templateUrl: "./templates/detection.html",
          controller: "CtrlDdetection",
        }
      }
    });
});

FaceDetect.controller('CtrlDdetection', ['$scope', '$http', function($scope, $http) {

  function init() {
    $scope.message = 'Olá!';
    $scope.tirarFoto = tirarFoto;
    $scope.onStream = onStream;
    $scope.onError = onError;
    $scope.onSuccess = onSuccess;
    $scope.channel = {
      videoHeight: 800,
      videoWidth: 600,
      video: null
    };
  }

  function onError(err) {
    console.log("Erro", err);
  }

  function onSuccess() {
    console.log("Success");
  }

  function onStream(stram) {
    console.log("Stream");
  }

  function tirarFoto() {
    console.log("Tirando foto...");
    if ($scope.channel) {
      var patCanvas = document.querySelector('#snapshot');
      if (!patCanvas) return;

      patCanvas.width = $scope.channel.width;
      patCanvas.height = $scope.channel.height;
      var ctxPat = patCanvas.getContext('2d');

      var idata = getVideoData(0, 0, $scope.channel.width, $scope.channel.height);
      ctxPat.putImageData(idata, 0, 0);

      document.window.open(patCanvas.toDataURL());
    }
  }

  init();
}]);