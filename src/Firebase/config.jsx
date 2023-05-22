
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyALe8EudOGzIj-jeSqehf_GOHFMU9cY--Y",
  authDomain: "portfilo-images.firebaseapp.com",
  projectId: "portfilo-images",
  storageBucket: "portfilo-images.appspot.com",
  messagingSenderId: "166541222782",
  appId: "1:166541222782:web:2f8148d0b70a9ca858092f"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);