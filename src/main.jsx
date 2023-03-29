import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmK68vIF542pAXRXVmWJ1SqBCIxH0zBJ0",
  authDomain: "graphicscenter-ca019.firebaseapp.com",
  projectId: "graphicscenter-ca019",
  storageBucket: "graphicscenter-ca019.appspot.com",
  messagingSenderId: "515719194382",
  appId: "1:515719194382:web:5a8de87629d3803ae6595f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
      <App />
    </ChakraProvider>

)
