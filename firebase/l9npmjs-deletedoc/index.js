import { initializeApp } from "firebase/app";
import { getFirestore, deleteDoc, doc } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcshV5rAqBBb2HYqL1ERCzGSX6DpQmtxU",
  authDomain: "myfirstproject-f03a8.firebaseapp.com",
  projectId: "myfirstproject-f03a8",
  storageBucket: "myfirstproject-f03a8.appspot.com",
  messagingSenderId: "405994634389",
  appId: "1:405994634389:web:8e9c3e1cf9053cb9efaf9c"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log(db);


// const dbRef = doc(db,"products","myid1001");
// deleteDoc(dbRef);


const dbRef = doc(db,"products","GMK0n1WplNSX4WZ0MsNy");
deleteDoc(dbRef).then(()=>{
    console.log("deleted successfully");
}).catch(error=>{
    console.log(error);
});