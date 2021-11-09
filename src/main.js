import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css';
//import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore-lite.js';

/*const firebaseConfig = {
  apiKey: "AIzaSyB4_b4BzASNqFpdF6HYsPHiwXq6AMHkZLk",
  authDomain: "covidbed-4e0ac.firebaseapp.com",
  projectId: "covidbed-4e0ac",
  storageBucket: "covidbed-4e0ac.appspot.com",
  messagingSenderId: "1077987210502",
  appId: "1:1077987210502:web:f3fbf3cd0d87b3cc579a87",
  measurementId: "G-9MEGEKLHS6"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

createApp(App).use(router).mount('#app')
