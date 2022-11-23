
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxA2wGDzl_xuaBLUa1u86p_KcBlktag6U",
  authDomain: "leslies-projects.firebaseapp.com",
  projectId: "leslies-projects",
  storageBucket: "leslies-projects.appspot.com",
  messagingSenderId: "487949080339",
  appId: "1:487949080339:web:3d9be4b80bf89e0c5f2ce6",
  measurementId: "G-Q7B304E54X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);