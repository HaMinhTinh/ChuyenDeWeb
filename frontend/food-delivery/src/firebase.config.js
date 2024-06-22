import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBJEP-hJzSdYXEX5q_hPE3aXG7F74wCzWQ",
  authDomain: "kan-qr.firebaseapp.com",
  projectId: "kan-qr",
  storageBucket: "kan-qr.appspot.com",
  messagingSenderId: "617428695704",
  appId: "1:617428695704:web:a22dd3d35bd18591acaeed",
  measurementId: "G-480YFPG759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);
