import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {
  createRoot,
} from 'react-dom/client';
import { Elements } from '@stripe/react-stripe-js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './services/persistence/provider';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import stripePromise from './services/stripe/stripe.utils';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
