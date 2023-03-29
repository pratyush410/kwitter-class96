const firebaseConfig = {
      apiKey: "AIzaSyDHNnA9QkLJ1r2ut3thJms5h-RyN-c4J30",
      authDomain: "kwitter-eef50.firebaseapp.com",
      databaseURL: "https://kwitter-eef50-default-rtdb.firebaseio.com",
      projectId: "kwitter-eef50",
      storageBucket: "kwitter-eef50.appspot.com",
      messagingSenderId: "151793304758",
      appId: "1:151793304758:web:1a1eb241f42ae020709217"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

                  //End code
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingRoomName"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}