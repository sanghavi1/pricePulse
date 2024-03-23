// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3n85nKHixhdSd1XLwDXmUYJa4TeUhvyE',
  authDomain: 'pricepulse-35ad8.firebaseapp.com',
  projectId: 'pricepulse-35ad8',
  storageBucket: 'pricepulse-35ad8.appspot.com',
  messagingSenderId: '742602135625',
  appId: '1:742602135625:web:ff61ef7507b64db9734798',
  measurementId: 'G-GPT7TWE4EE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
