import React, { useEffect } from 'react';
import './authentication.style.scss';
import { getRedirectResult } from 'firebase/auth';
import {
  auth, createUserDocumentFromAuth,
} from '../../services/firebase.utils';
import SignupForm from '../../components/signup-form/signup-form.component';
import SigninForm from '../../components/signin-form/signin-form.component';

export default function Authentication() {
  useEffect(() => {
    const getData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response);
      }
    };
    getData();
  }, []);

  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
}
