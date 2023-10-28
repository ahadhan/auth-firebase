let signUpPage = document.getElementById("signup");
let login = document.getElementById("login");
let errorsAlert = document.getElementById("alert");
let alertText = document.getElementById("alert-text");
let userInNav = document.getElementById("user-in-nav");
let deleteAllBtn = document.getElementById("delete-all");
let showAllBtn = document.getElementById("show-all");


let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let firstName = document.getElementById("firsNameInput1");
let lastName = document.getElementById("lastNameInput4");
let email2 = document.getElementById("exampleInputEmail2");
let confirmPassword = document.getElementById("confirminputPassword4");
let passwordCA = document.getElementById("exampleInputPassword2");




const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyA_AgHs0IWU4Y99_6Ly1MXaULkFiSo73SU",
  authDomain: "login-auth-cdde5.firebaseapp.com",
  projectId: "login-auth-cdde5",
  storageBucket: "login-auth-cdde5.appspot.com",
  messagingSenderId: "350974683334",
  appId: "1:350974683334:web:afe9af2f2005612cde4fc7"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {
  event.preventDefault();
  let email2 = document.getElementById("exampleInputEmail2").value;
  let passwordCA = document.getElementById("exampleInputPassword2").value;
  console.log(email2, passwordCA);

  firebase.auth().createUserWithEmailAndPassword(email2, passwordCA)
    .then((result) => {
      // Signed in 
      console.log("You Are Signed In!")

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Successfully LoggedIn!',
        showConfirmButton: false,
        timer: 1500
      })
      // ...
      window.location.href = 'home.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
      Swal.fire({
        icon: 'error',
        title: "Email already registered!",
        text: errorMessage + "Try to Login"
      })
    });
}

const signIn = () => {
  event.preventDefault();

  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;
    console.log(email, password);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
      console.log("You Are Signed In!")

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Successfully LoggedIn!',
        showConfirmButton: false,
        timer: 1500
      })
      // ...
      window.location.href = 'home.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
      Swal.fire({
        icon: 'error',
        title: "Account not found!",
        text: errorMessage + "Create Account to Login"
      })
    });
}


const changePagetoCA = (e) => {
  e.preventDefault()
  console.log(login);
  login.style.display = "none";
  signUpPage.style.display = "block";
}