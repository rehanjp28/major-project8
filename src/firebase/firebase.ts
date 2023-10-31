import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCPo4Ycop-wEYBe3JbZS0J9XpkZ5e-sLog",
	authDomain: "leetcode-8.firebaseapp.com",
	projectId:"leetcode-8" ,
	storageBucket: "leetcode-8.appspot.com",
	messagingSenderId: "926154489969",
	appId:"1:926154489969:web:b0f0fef5946162487d1bd0",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
