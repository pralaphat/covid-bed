import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBD30cRL64MuTQDJrG7Z4wREwC3yjdML7w",
    authDomain: "covidbed-724fb.firebaseapp.com",
    projectId: "covidbed-724fb",
    storageBucket: "covidbed-724fb.appspot.com",
    messagingSenderId: "197108136764",
    appId: "1:197108136764:web:3f91242f008a3477397c39"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { timestamp };
  export default firebaseApp.firestore();