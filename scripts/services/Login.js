(function(){
  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', '$firebaseAuth', Login])
    .service('LoginAUser', ['$cookies','$uibModal', '$firebaseAuth', Login]);
  /**
   * @ngdoc Starts the login process on page load. Needs to be called from button as well.
   * @name
   * @description
   *
   *
   */
  function Login($cookies, $uibModal, $firebaseAuth){
    $firebaseAuth().$signOut().then(function (){
      console.log ("logout");
       $cookies.remove('blocChatCurrentUser');
    });
    var currentUsr = "";
    console.log ("fbUser");
    var fbu1 = firebase.auth();

    if (!currentUsr || currentUsr === '') {
      $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        backdrop: false,
        keyboard: false,
        templateUrl: 'templates/login.html',
        controller: 'LoginModalCtrl',
        controllerAs: 'LoginModal',
        size: 'sm',
      });
    }
  }


})();
