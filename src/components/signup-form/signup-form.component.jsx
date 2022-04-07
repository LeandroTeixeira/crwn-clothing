import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../services/firebase.utils';
import './signup-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

let warnMessage = '';
let successMessage = '';

function validateFields({
  displayName, email, password, confirmPassword,
}) {
  const validateName = displayName.length >= 5;
  if (!validateName) {
    warnMessage = 'Error: The display name must have at least 5 characters';
    return true;
  }

  const validateEmail = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

  if (!validateEmail) {
    warnMessage = 'Error: Invalid Email';
    return true;
  }

  const validatePassword = password.length >= 6;
  if (!validatePassword) {
    warnMessage = 'Error: The password must have at least 6 characters';
    return true;
  }
  const validateConfirm = password === confirmPassword;
  if (!validateConfirm) {
    warnMessage = 'Error: The passwords must match';
    return true;
  }
  warnMessage = 'All fields are clear';
  return false;
}

export default function SignupForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName, email, password, confirmPassword,
  } = formFields;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && !!email) {
      try {
        const response = await createAuthUserWithEmailAndPassword(email, password);
        if (response) {
          createUserDocumentFromAuth(response.user, { displayName });
        }
        successMessage = 'User succesfully created';
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          successMessage = 'Error: Cannot create user. Email already in use';
        } else { warnMessage = `Error: ${error}`; }
      } finally {
        setFormFields(defaultFormFields);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2> Don&#39;t have an account ? </h2>
      <span> Sign Up with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          handleChange={handleChange}
          value={displayName}
        />
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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          value={confirmPassword}
        />
        <div
          className={` message ${
            warnMessage.match(/Error/) ? 'error' : 'success'
          } `}
        >
          {warnMessage}
        </div>
        <div
          className={` message ${
            successMessage.match(/Error/) ? 'error' : 'success'
          } `}
        >
          {successMessage}
        </div>
        <Button type="submit" disabled={validateFields(formFields)}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
