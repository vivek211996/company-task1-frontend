  import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyCXeswF7lQ1C7TWFDtSPoXhR2cFWVFllGA",
    authDomain: "firstproject-6e502.firebaseapp.com",
    databaseURL: "https://firstproject-6e502.firebaseio.com",
    projectId: "firstproject-6e502",
    storageBucket: "firstproject-6e502.appspot.com",
    messagingSenderId: "235515312020",
    appId: "1:235515312020:web:3ab6581f28b3df551b8181",
    measurementId: "G-53TC16R59Z"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default fire;