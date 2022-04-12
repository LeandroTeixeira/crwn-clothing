import React, { useContext, useEffect } from 'react';
import './authentication.style.scss';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../../components/signup-form/signup-form.component';
import SigninForm from '../../components/signin-form/signin-form.component';
import { UserContext } from '../../services/contexts';

export default function Authentication() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
}
