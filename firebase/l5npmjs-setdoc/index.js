import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore"; 

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
//     name:"redbull",
//     type:"food",
//     price:2000
// });

// setDoc(doc(db,"products","myid1003"),{
//     name:"Soothie",
//     type:"drink",
//     price:3000
// }).then((docRef)=>{
//     console.log("Created Successfully.");
//     console.log(docRef.id);     // error
// }).catch(error=>{
//     console.log(error);
// });


// setDoc(doc(collection(db, "products"), "myid1004"), {
//     name: "Asia",
//     type: "drinks",
//     price: 1500
//   }).then(() => {
//     console.log("Created Successfully.");
//   }).catch((error) => {
//     console.error(error);
//   });


// setDoc(doc(collection(db, "products")), {
//     name: "Deedo",
//     type: "drinks",
//     price: 2500
//   }).then(() => {
//     console.log("Created Successfully.");
//   }).catch((error) => {
//     console.error(error);
//   });

