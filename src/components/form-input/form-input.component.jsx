import { func, string } from 'prop-types';
import React from 'react';
import './form-input.styles.scss';

export default function FormInput({
  label, type, name, handleChange, value,
}) {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        required
      />
      <label
        className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
}

FormInput.propTypes = {
  label: string,
  type: string,
  name: string,
  handleChange: func,
  value: string,
}.isRequired;
