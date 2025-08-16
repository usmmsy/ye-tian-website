import { initializeApp } from "firebase/app"
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore"
  
const firebaseConfig = {
    apiKey: "AIzaSyCk-ubCFsKqkjuuytdScyG6ToEuTDGxcVk",
    authDomain: "websiteclient-fe5bf.firebaseapp.com",
    projectId: "websiteclient-fe5bf",
    storageBucket: "websiteclient-fe5bf.firebasestorage.app",
    messagingSenderId: "179752346071",
    appId: "1:179752346071:web:2dabde877feb868bff2b92",
    measurementId: "G-F9G9DDE6YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Update the visitor count on the page
const visitorCountRef = ref(db, 'visitorCount');
onValue(visitorCountRef, (snapshot) => {
    const count = snapshot.val() || 0;
    document.getElementById('visitorCount').textContent = `Visitors this week: ${count}`;
});
