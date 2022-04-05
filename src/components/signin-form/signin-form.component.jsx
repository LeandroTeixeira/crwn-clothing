import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup,
} from '../../services/firebase.utils';
import './signin-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SigninForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email, password,
  } = formFields;
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      if (response) {
        // createUserDocumentFromAuth(response.user, { displayName });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFormFields(defaultFormFields);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ? </h2>
      <span> Sign In with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          handleChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          handleChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            signInWithGoogle
            onClick={signInWithGoogle}
            buttonType="google"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
