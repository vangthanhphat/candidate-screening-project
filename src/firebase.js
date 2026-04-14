import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiOhr5LPnsJpLE81NiSor8VCItazekBxI",
  authDomain: "shopping-list-5fcb1.firebaseapp.com",
  projectId: "shopping-list-5fcb1",
  storageBucket: "shopping-list-5fcb1.firebasestorage.app",
  messagingSenderId: "554581446208",
  appId: "1:554581446208:web:bf5917248e8fd79c3259a5"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Xuất công cụ Database ra để file App.js sử dụng
export const db = getFirestore(app);