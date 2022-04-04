import React from 'react';
import './sign-in.style.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../services/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      {' '}
      Sign in
      <button type="button" onClick={logGoogleUser}> Sign With Google </button>
    </div>
  );
}
