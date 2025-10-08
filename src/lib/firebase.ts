
import { initializeApp, getApps, getApp, FirebaseOptions, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let db: Firestore | null = null;
let auth: Auth | null = null;

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error("Firebase config is not set. Please add your Firebase project's configuration to the environment variables.");
  if (typeof window !== "undefined") {
    // This will be visible to the user in the browser console.
    alert("Firebase is not configured. Please check the console for details.");
  }
  // Initialize with dummy values to prevent app crash, but services will not work.
  app = getApps().length ? getApp() : initializeApp({apiKey: "dummy", projectId: "dummy"});
} else {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  try {
    db = getFirestore(app);
    auth = getAuth(app);
  } catch (e) {
    console.error("Failed to initialize Firebase services, please check your Firebase config.", e);
  }
}

export { app, db, auth };
