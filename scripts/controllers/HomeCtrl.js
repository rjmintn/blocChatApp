(function() {
  angular
    .module('blocChat')
    .controller('HomeCtrl2', ['Room1', 'Message', HomeCtrl1]);
  function HomeCtrl1(Room2, MessageFactory) {
    /**
     * @ngdoc connects all available rooms to home.
     * @name
     * @description
     *
     *
     */
    this.allRooms = Room2.all;
    // this.loggedInUser = ;
    // if (firebase.auth().currentUser != null) {
    //   this.loggedInUser = firebase.auth().currentUser.displayName;
    //   console.log(this.loggedInUser);
    // }


    /**
     * @ngdoc changes to new chat room.
     * @name
     * @description
     *
     *
     */
    this.changeRoom = function(room){
      this.roomTitle = room.$value;
      this.selectedRoom = room.$id;
      var roomData = MessageFactory.getByRoomId(room.$id);
      this.roomMessages = roomData;
    };

  }


})();
