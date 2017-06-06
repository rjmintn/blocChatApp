(function() {
  angular
    .module('blocChat')
    .controller('LoginModalCtrl', ['$uibModalInstance',  'UserServices', LoginModalCtrlFunction]);
/**
 * @ngdoc Controls the login modal
 * @name
 * @description
 *
 *
 */


  function LoginModalCtrlFunction($uibModalInstance,  UserServices) {
    var response = this;
    var submit = {};
    UserServices.close = $uibModalInstance.close;
    submit.login = UserServices.login;
    submit.create = UserServices.create;
    console.dir(this);


    response.ok = function (user) {
      submit.login(user);
    };

    response.create = function (user) {
      submit.create(user);
    };
  }


})();
