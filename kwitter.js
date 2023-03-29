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

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    })
localStorage.setItem("user_name",user_name);
window.location="kwitter_room.html";
}