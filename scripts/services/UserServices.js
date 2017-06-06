(function () {
  /**
   * @ngdoc Lets create some objects
   * @name
   * @description
   *
   *
   */
  angular
    .module('blocChat')
    .factory('UserServices', ['$cookies', '$firebaseAuth', '$uibModal', userServices]);


  function userServices($cookies, $firebaseAuth, $uibModal){






    var userSvc = $firebaseAuth(firebase.auth());
    userSvc.user = {};
    userSvc.response = "";
    userSvc.modal = $uibModal;
    userSvc.loggedInUser = "not logged in.";
    // console.dir($uibModal);

    /**
     * @ngdoc logout
     * @name
     * @description
     * called on first load or button select
     *
     */

    userSvc.logout = function (){
      console.log ("logout");
      userSvc.$signOut();
      $cookies.remove('blocChatCurrentUser');
    };

    /**
     * @ngdoc login
     * @name
     * @description
     * Called from login.html button select
     *
     */

    userSvc.login = function(loginUser){
      userSvc.response = "";
      userSvc.$signInWithEmailAndPassword(loginUser.email, loginUser.password) .then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        var expireDate = new Date();
        userSvc.close();
        expireDate.setDate(expireDate.getDate() + 1.0001);
        $cookies.put('blocChatCurrentUser', firebaseUser.displayName, {'expires': expireDate});
        userSvc.response = ("Welcome " + firebaseUser.email);
        userSvc.loggedInUser = firebaseUser.displayName;
      })
      .catch(function(error) {
        console.error("Authentication failed:", error);
        userSvc.response = "No user account found. Please create account.";
        console.log(userSvc.loginError);

      });
    };

    /**
     * @ngdoc create an account
     * @name
     * @description
     * called from login.html
     *
     */

    userSvc.create = function (createUser){
      userSvc.response = "";
      if (createUser.password == createUser.password2){
      userSvc.$createUserWithEmailAndPassword(createUser.email, createUser.password)
        .then(function(firebaseUser) {
          userSvc.login(createUser);
          userSvc.update(createUser);
          console.log("User " + firebaseUser.uid + " created successfully!");
          userSvc.close();
          console.dir (firebase.User);
        }).catch(function(error) {
          userSvc.response = error;
          console.error("Error: ", error);
        });
      } else {
        userSvc.response = "Passwords do not match."
        console.log (userSvc.response);
      }
    };

    /**
     * @ngdoc Future features
     * @name
     * @description
     * once we get some admin profiles...
     *
     */

    userSvc.delete = function(){
      userSvc.response = "";
      console.log ("delete");
      // $scope.authObj.$deleteUser().then(function() {
      //   console.log("User removed successfully!");
      // }).catch(function(error) {
      // userSvc.response = error;
      //   console.error("Error: ", error);
      // });
    };

    /**
     * @ngdoc future features
     * @name
     * @description
     * lets create some user profiles here
     *
     */

    userSvc.update = function (user){
      var userProfile = firebase.auth().currentUser;

      userProfile.updateProfile({
        displayName: user.displayName
      }).then(function(response) {
         //Success
         console.log ("UserInf");
       }, function(error) {
         //Error
         console.log(error);
       });
      userSvc.response = "";
      console.log ("edit");
    };

    return userSvc;

  }

})();
