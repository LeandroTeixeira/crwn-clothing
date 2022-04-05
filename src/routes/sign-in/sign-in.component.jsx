import React, { useEffect } from 'react';
import './sign-in.style.scss';
import { getRedirectResult } from 'firebase/auth';
import {
  auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth,
} from '../../services/firebase.utils';
import SignupForm from '../../components/signup-form/signup-form.component';

export default function SignIn() {
  useEffect(() => {
    const getData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    getData();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };
  return (
    <div>
      {' '}
      Sign in
      <button type="button" onClick={logGoogleUser}>
        {' '}
        Sign With Google
        {' '}
      </button>
      <button type="button" onClick={signInWithGoogleRedirect}>
        {' '}
        Sign With Google Redirect
      </button>
      <SignupForm />
    </div>
  );
}
