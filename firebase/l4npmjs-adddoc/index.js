// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcshV5rAqBBb2HYqL1ERCzGSX6DpQmtxU",
  authDomain: "myfirstproject-f03a8.firebaseapp.com",
  projectId: "myfirstproject-f03a8",
  storageBucket: "myfirstproject-f03a8.appspot.com",
  messagingSenderId: "405994634389",
  appId: "1:405994634389:web:8e9c3e1cf9053cb9efaf9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Add a document to the Firestore database
addDoc(collection(db, "users"), {
  name: "lin lin",
  city: "mdy",
  age: 23
});

//=> display auto generated id after data set
addDoc(collection(db, "users"), {
    name: "su su",
    city: "ygn",
    age: 34
  }).then(docRef => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });



// create db > console.firebase.com > ur db > build > firestore db > create db


// Error for writing (Permission_Denied)
// Rules > allow read, write: if true; > published
