//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send() {
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("msg").value=""
}