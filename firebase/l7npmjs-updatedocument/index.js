import { error } from "console";
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc } from "firebase/firestore"; 

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

// updateDoc(doc(db,"products","myid1001"),{
//     name:"redbull"
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });

// updateDoc(doc(db,"products","myid1001"),{
//     price:"1500",
//     unit:"can"
// });

// const dbRef = doc(db,"products","myid1001");
// const data = {
//     name:"deedo"
// };

// updateDoc(dbRef,data);


const dbRef = doc(db,"products","myid1001");
const data = {
    name:"Shark",
    type:"energy drink",
    price:2000,
    unit:"can"
};

updateDoc(dbRef,data).then(()=>{
    console.log("updated successfully");
}).catch(error=>{
    console.log(error);
});