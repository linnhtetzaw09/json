import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore"; 

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

        // db   table_name  id
// setDoc(doc(db,"products","myid1001"),{
//     name:"Yoshi",
//     type:"food",
//     price:1300
// });

// setDoc(doc(db,"products","GMK0n1WplNSX4WZ0MsNy"),{
//     name:"Sprite",
//     type:"drind",
//     price:2000
// }).then(()=>{
//     console.log("Updated Successfully.");
// }).catch((error)=>{
//     console.log(error);
// })


// => Before Merge


// => After Merge