// Import the functions you need from the SDKs you need
import { setDoc, doc, getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword} from "firebase/auth";

// SDKs for Firebase products
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;
const databaseUrl = import.meta.env.VITE_DATABASE_URL;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain:authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId:messagingSenderId,
  appId: appId,
  measurementId: measurementId,
  datbaseUrl : databaseUrl
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



//auth
const auth = getAuth(app)
const db = getFirestore(app); 

// firebase function to register new user 
export const signupUser = async (username, email, password, mobile) => {
  try {
    // Create the user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    const user = userCredential.user;
    
    // Update the user's profile to add the username
    await updateProfile(user, {
      displayName: username,
    });

    // Store the mobile number and other details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      mobile: mobile,
      username: username,
      email: email
    });
    
    // Additional logic like redirecting the user or updating the UI can go here
  } catch (error) {
    alert(error.message)
  }
};


// firebase function to login exiting user
export const loginUser = async (email, password) => {
  try {
    // Sign in the user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // User signed in successfully
    const user = userCredential.user;

    // You can add additional logic here, like redirecting the user or updating UI
    return user;  // Return the signed-in user data if needed
  } catch (error) {
    alert(error.message)
    throw error;  // Re-throw the error to handle it elsewhere if needed
  }
};


// firebase function to logout current user
export const logoutUser = async () => {
  try {
    // Sign out the user
    await signOut(auth);    
    // You can add additional logic here, such as redirecting the user to the login page
  } catch (error) {
    // Handle errors during sign out, like displaying a message to the user
  }
};
