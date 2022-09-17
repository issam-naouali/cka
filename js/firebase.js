 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkf7oyWDQ9EXZfqRx52PnAK2qMfjb-H5I",
  authDomain: "eks-training.firebaseapp.com",
  projectId: "eks-training",
  storageBucket: "eks-training.appspot.com",
  messagingSenderId: "461078351900",
  appId: "1:461078351900:web:02296299e2fe8d08110fd9",
  measurementId: "G-WDTZ2HZSLC"
};