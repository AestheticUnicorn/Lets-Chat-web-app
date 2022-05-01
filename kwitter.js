var firebaseConfig = {
    apiKey: "AIzaSyDFgwOysn5Q_Mkif6BeRDmegc0VNkxgxN4",
    authDomain: "kwitter-app-6d3df.firebaseapp.com",
    databaseURL: "https://kwitter-app-6d3df-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-6d3df",
    storageBucket: "kwitter-app-6d3df.appspot.com",
    messagingSenderId: "907756487634",
    appId: "1:907756487634:web:a8d15c43188e8cf1edfe0b"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}