import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMh2VrUlnSauxegAPYPBedud8aUYkA6zY",
  authDomain: "c-suite-academy.firebaseapp.com",
  projectId: "c-suite-academy",
  storageBucket: "c-suite-academy.appspot.com",
  messagingSenderId: "609418569881",
  appId: "1:609418569881:web:1f78b387304415d6a53008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };