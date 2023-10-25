import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  "bootstrap/dist/css/bootstrap.min.css" 
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApkGIL7QvtMIp-jPe8lMunWY94zBPCdB0",
  authDomain: "coder-react-660a1.firebaseapp.com",
  projectId: "coder-react-660a1",
  storageBucket: "coder-react-660a1.appspot.com",
  messagingSenderId: "1086663475162",
  appId: "1:1086663475162:web:46f1b8c2877276ed46cae3"
};

// Initialize Firebase

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)


