import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEssMW3H1I8LxywjPGuuAXqQu9pfhX5ME",
  authDomain: "court-corner-a40ac.firebaseapp.com",
  databaseURL: "https://court-corner-a40ac-default-rtdb.firebaseio.com",
  projectId: "court-corner-a40ac",
  storageBucket: "court-corner-a40ac.appspot.com",
  messagingSenderId: "226582848440",
  appId: "1:226582848440:web:0b4b6f84d7108243d9654d"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
