var firebaseConfig = {
  apiKey: "AIzaSyAhGBaoMGoGNGRIf8oAe6R8oGdAUvfgl1U",
  authDomain: "c-93-8f0d6.firebaseapp.com",
  databaseURL: "https://c-93-8f0d6-default-rtdb.firebaseio.com",
  projectId: "c-93-8f0d6",
  storageBucket: "c-93-8f0d6.appspot.com",
  messagingSenderId: "625765915758",
  appId: "1:625765915758:web:1ca5cf444f314449341a7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose:"adding user"
    });
}