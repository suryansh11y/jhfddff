var firebaseConfig = {
    apiKey: "AIzaSyDy9t1PJQrAiB0A_ibilaAlhh3EXnnWSpY",
    authDomain: "kwitter-3cc1e.firebaseapp.com",
    databaseURL: "https://kwitter-3cc1e-default-rtdb.firebaseio.com",
    projectId: "kwitter-3cc1e",
    storageBucket: "kwitter-3cc1e.appspot.com",
    messagingSenderId: "347584750664",
    appId: "1:347584750664:web:3ee790e21f40ea8f66e47d",
    measurementId: "G-QCPH35E9DF"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
  }

  firebase.initializeApp(firebaseConfig);

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName (this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
         //End code
         });});}
   getData();

   function redirectToRoomName(name)
   {
     console.log(name);
     localStorage.setItem("room_name" , name);
     window.location = "kwitter_page.html";
   }

   function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
      window.location = "index.html";

   }

   function send(){
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      name: user_name,
      message : msg,
      like:0
     });
     document.getElementById("msg").value = "";
   }
