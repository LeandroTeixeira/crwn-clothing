import {
  bool, func, node, oneOf, string,
} from 'prop-types';
import React from 'react';
import {
  BaseButton, GoogleSignInButton, InvertedButton, DisabledBaseButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: 'default',
  disabledBase: 'disabledBase',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) => ({
  [BUTTON_TYPE_CLASSES.default]: BaseButton,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
  [BUTTON_TYPE_CLASSES.disabledBase]: DisabledBaseButton,
}[buttonType]);

export default function Button({
  children, buttonType, type, disabled, onClick,
}) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      type={type}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType.toLowerCase()]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </CustomButton>
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
