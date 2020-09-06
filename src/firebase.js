import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyB8ASBDq2ga4ybBQOeymLUAaFNmjHMFRU0",
    authDomain: "whatsapp-clone-7669d.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-7669d.firebaseio.com",
    projectId: "whatsapp-clone-7669d",
    storageBucket: "whatsapp-clone-7669d.appspot.com",
    messagingSenderId: "793822403252",
    appId: "1:793822403252:web:82e96a3cc0e42ffe4f15e1",
    measurementId: "G-RP0T98WW2C"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  cosnt db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firenase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;