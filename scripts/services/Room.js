(function() {
  angular
    .module('blocChat')
    .factory('Room1', ['$firebaseArray', Room1]);
  function Room1($firebaseArray) {
    /**
     * @ngdoc Setting Variables
     * @name
     * @description
     *
     *
     */
    var Room3 = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    /**
     * @ngdoc Sets all available room names
     * @name
     * @description
     *
     *
     */
      //   console.log(firebase.auth().currentUser.displayName);
    Room3.all = rooms;

    /**
     * @ngdoc creates add room function
     * @name
     * @description
     *
     *
     */

    Room3.add = function(room){
      rooms.$add({ "$value": room }).then(function(ref) {
        var id = ref.key;
        rooms.$indexFor(id);
      });
    };

    return Room3;
  }


})();
