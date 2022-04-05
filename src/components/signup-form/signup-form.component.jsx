import React, { useState } from 'react';
import './signup-form.style.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../services/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

let warnMessage = '';

function validateFields({
  displayName, email, password, confirmPassword,
}) {
  const validateName = displayName.length >= 5;
  if (!validateName) {
    warnMessage = 'The display name must have at least 5 characters';
    return true;
  }

  const validateEmail = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

  if (!validateEmail) {
    warnMessage = 'Invalid Email';
    return true;
  }

  const validatePassword = password.length >= 6;
  if (!validatePassword) {
    warnMessage = 'The password must have at least 6 characters';
    return true;
  }
  const validateConfirm = password === confirmPassword;
  if (!validateConfirm) {
    warnMessage = 'The passwords must match';
    return true;
  }
  warnMessage = 'all fields are clear';
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
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          warnMessage = 'Cannot create user. Email already in use';
        } else { warnMessage = error; }
      } finally {
        setFormFields(defaultFormFields);
      }
    }
  };

  return (
    <div>
      <h1> Sign Up with Email and Password</h1>
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="displayName">
          Display Name
          <input
            type="text"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={validateFields(formFields)}>Sign Up</button>
        {warnMessage}
      </form>

    </div>
  );
}
