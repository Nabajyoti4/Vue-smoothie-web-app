  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWrPSi-PzULZ2YJsjDqmXzmpGIJup4bTA",
    authDomain: "ninja-smoothies-97aff.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-97aff.firebaseio.com",
    projectId: "ninja-smoothies-97aff",
    storageBucket: "ninja-smoothies-97aff.appspot.com",
    messagingSenderId: "609737685149",
    appId: "1:609737685149:web:c4e8a2cde2493f36d73c74",
    measurementId: "G-81NJ441CK2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // export 
  export default firebaseApp.firestore()