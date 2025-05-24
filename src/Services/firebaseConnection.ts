import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwcywSumZq-QCUDztum_k9yKRXivRsTOs",
  authDomain: "expensecontrol-10b58.firebaseapp.com",
  projectId: "expensecontrol-10b58",
  storageBucket: "expensecontrol-10b58.firebasestorage.app",
  messagingSenderId: "644730863022",
  appId: "1:644730863022:web:563fd21a47c0932aaa5c3f",
  measurementId: "G-4Y35DF6LM5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
