(function() {
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message1]);


  function Message1($firebaseArray, $cookies) {
    /**
     * @ngdoc Sets initial Variables
     * @name
     * @description
     *
     *
     */
    var $Message = {};
    $Message.messages1 = {};
    $Message.currentUser = ' not logged in'
//      console.dir(firebase.auth().currentUser.displayName);
      //  (firebase.auth().currentUser.displayName) ? firebase.auth().currentUser.displayName : "RJ";


    /**
     * @ngdoc Searches firebase for messages equal to selected room then returns all room messages.
     * @name
     * @description
     *
     *
     */
    $Message.getByRoomId = function(roomID) {

      var selectedRoom = roomID;
      var ref = firebase.database().ref().child("messages").orderByChild('roomId').equalTo(selectedRoom); //add get by room
      var messages = $firebaseArray(ref);
      $Message.messages1 = messages;
      return $Message;
    };

    /**
     * @ngdoc Sends those trolling messages. go go go
     * @name
     * @description
     *
     *
     */

    $Message.send = function(newMessage, room, temp) {
      // console.log(username);
      var ref = firebase.database().ref().child("messages");
      var msgs = $firebaseArray(ref);
      var currentTime = new Date();
      if (!$Message.currentUser) {
        $Message.currentUser = $cookies.get('blocChatCurrentUser');
      }
      var display = firebase.auth().currentUser.displayName;

      console.dir(display);
      msgs.$add({ content: newMessage, roomId: room, sentAt: currentTime.getTime(), username: $Message.currentUser, displayName: display }).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        msgs.$indexFor(id); // returns location in the array
      });



    };


    return $Message;
  }


})();
