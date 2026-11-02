
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBZmVPu_B7bQxmkMyvim18ImpCVR4iP_Wo",
    authDomain: "clipforge-5d1cb.firebaseapp.com",
    projectId: "clipforge-5d1cb",
    storageBucket: "clipforge-5d1cb.firebasestorage.app",
    messagingSenderId: "1068957888160",
    appId: "1:1068957888160:web:a030208ce500e8f164e3c5",
    measurementId: "G-9CXNRHWJ5Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };

