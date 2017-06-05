(function() {
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room1', ModalInstanceCtrl1]);
/**
 * @ngdoc Controls the modal instance for creating rooms. I could see about making a single modal controller to rule them all...
 * @name
 * @description
 *
 *
 */

  function ModalInstanceCtrl1($uibModalInstance, Room4) {

    var $ctrl3 = this;
    $ctrl3.ok = function () {
      $uibModalInstance.close();
      Room4.add($ctrl3.roomName);
    };

    $ctrl3.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }


})();
