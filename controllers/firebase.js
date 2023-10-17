 import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
 
 
 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBshhr4D9HW_Mn6H0jczaZZ_BZUCAY5MBQ",
    authDomain: "alurageekfinal.firebaseapp.com",
    projectId: "alurageekfinal",
    storageBucket: "alurageekfinal.appspot.com",
    messagingSenderId: "617702918207",
    appId: "1:617702918207:web:3478eede39beac63a8d08a"
  };

  // Initialize Firebase
  

  export const firebaseApp = initializeApp(firebaseConfig);
  console.log(firebaseApp);

