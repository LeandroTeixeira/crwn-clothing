import {
  bool, func, node, oneOf, string,
} from 'prop-types';
import React from 'react';
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: 'default',
};

export default function Button({
  children, buttonType, type, disabled, onClick,
}) {
  return (
    <button
      type={type}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType.toLowerCase()]}`}
      disabled={disabled}
      onClick={onClick}
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
  onClick: func,
};

Button.defaultProps = {
  children: 'Button',
  buttonType: 'default',
  type: 'button',
  disabled: false,
  onClick: () => {},
};
