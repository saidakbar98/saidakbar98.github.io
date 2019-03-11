var config = {
    apiKey: "AIzaSyChQhSOGgWaBRay20YXcfd-qJIDPR1Iis8",
    authDomain: "my-project-1542388666686.firebaseapp.com",
    databaseURL: "https://my-project-1542388666686.firebaseio.com",
    projectId: "my-project-1542388666686",
    storageBucket: "my-project-1542388666686.appspot.com",
    messagingSenderId: "1060655122215"
  };
  firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

      document.getElementById("logins").action="index.html";
      
  } 
    else {
    // No user is signed in.
      document.getElementById("logins").action="login.html";
  }
});
function login(){
    var username=document.getElementById("in_mail").value;
    var userpwd=document.getElementById("in_pass").value;
 
    if(username!="" && userpwd!=""){

         firebase.auth().signInWithEmailAndPassword(username, userpwd).catch(function(error) {
        // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          window.alert("error");
              
         });     
 }
    

}


