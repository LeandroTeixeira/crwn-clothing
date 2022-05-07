/* eslint-disable no-console */
// Import the functions you need from the SDKs you need
import {
  initializeApp,
} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect, signInWithPopup,
  GoogleAuthProvider, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('Done');
};

export const getCategoriesAndDocuments = async (key = 'categories') => {
  const collectionRef = collection(db, key);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const createUserDocumentFromAuth = async (userAuth, aditionalInformation = { password: '' }) => {
  if (!userAuth) return false;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName, email, createdAt, ...aditionalInformation,
      });
    } catch (error) {
      console.log(`Error creating user : ${error}`);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return false;
  const resul = await createUserWithEmailAndPassword(auth, email, password);
  return resul;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return false;
  const resul = await signInWithEmailAndPassword(auth, email, password);
  return resul;
};

export const signOutUser = async () => { const result = await signOut(auth); return result; };

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);
