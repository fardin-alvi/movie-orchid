import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD2yDt5GLJo1P4WMLsaFT_NAgftTyQBFr8",
    authDomain: "movie-portal-85fbe.firebaseapp.com",
    projectId: "movie-portal-85fbe",
    storageBucket: "movie-portal-85fbe.firebasestorage.app",
    messagingSenderId: "53780085123",
    appId: "1:53780085123:web:5424ffed38dfee5ba41eb6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;