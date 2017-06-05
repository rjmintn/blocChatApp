(function() {
  angular
    .module('blocChat')
    .controller('ModalDemoCtrl', ['$uibModal', '$document', ModalDemoCtrl1]);
  /**
   * @ngdoc Used for opening the create room modal. I could probably go someplace else
   * @name
   * @description
   *
   *
   */

  function ModalDemoCtrl1($uibModal, $document){

    var $ctrl1 = this;

    $ctrl1.open = function (size, parentSelector) {
      console.log (this);
      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/createRoom.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl2',
        size: size
      });
    };
  }

})();
