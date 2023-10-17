import { getAuth, signInWithEmailAndPassword, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { firebaseApp } from "../controllers/firebase.js";

const auth = getAuth(firebaseApp)
const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password )
    
  } catch (error) {
    throw new Error("no se pudo autenticar");
  }
}

export const authService = {login};