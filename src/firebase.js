import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore} from 'firebase/firestore'
import { getAuth} from 'firebase/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3kHJ0wLeD-NaQqQM7Yh8vgFoNOqpuuDI",
    authDomain: "linked-clone-67959.firebaseapp.com",
    projectId: "linked-clone-67959",
    storageBucket: "linked-clone-67959.appspot.com",
    messagingSenderId: "336925201595",
    appId: "1:336925201595:web:e2c7980953484d9e27059e",
    measurementId: "G-0CW4PDWE8Y"
  };

  const firebaseApp = firebase.default.initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth =  getAuth(firebaseApp);
  export {db,auth};
