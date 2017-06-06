(function() {
  angular
  .module('blocChat')
  .controller("AuthenticationControl", ['UserServices',  authCtrl]);

  /**
   * @ngdoc Controller for account activities
   * @name
   * @description
   *
   *
   */

  function authCtrl(userSvc) {
    this.firebaseAuthObj = userSvc;
    console.dir(userSvc);
  }

})();
