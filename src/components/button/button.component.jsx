import {
  bool, node, oneOf, string,
} from 'prop-types';
import React from 'react';
import './button.style.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: 'default',
};

export default function Button({
  children, buttonType, type, disabled,
}) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node,
  buttonType: string,
  type: oneOf(['button', 'submit', 'reset']),
  disabled: bool,
};

Button.defaultProps = {
  children: 'Button',
  buttonType: 'default',
  type: 'button',
  disabled: false,
};
