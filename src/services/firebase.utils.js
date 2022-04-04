// Import the functions you need from the SDKs you need
import {
  initializeApp,
} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHCZqG71eAqv8br62oQo_X_9Wp_VBSRgs',
  authDomain: 'crwn-clothing-db-e9bf3.firebaseapp.com',
  projectId: 'crwn-clothing-db-e9bf3',
  storageBucket: 'crwn-clothing-db-e9bf3.appspot.com',
  messagingSenderId: '881823694333',
  appId: '1:881823694333:web:286452e02764a1da466d94',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(`Error creating user : ${error}`);
    }
  }
  return userDocRef;
};
