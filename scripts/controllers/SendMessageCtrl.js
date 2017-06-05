(function() {
  angular
      .module('blocChat')
      .controller('SendMessageCtrl', ['$scope','Message', SendMessageCtrlFunction]);
/**
 * @ngdoc This lets the magic happen.
 * @name
 * @description
 *
 *
 */

  function SendMessageCtrlFunction($scope, Message2) {
   this.send = function(message, room) {
     Message2.send(message, room);
     $scope.msg='';
   }
 }



})();
