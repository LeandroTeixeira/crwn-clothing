import { func, string } from 'prop-types';
import React from 'react';
import { FormInputLabel, Input, Group } from './form-input.styles';

export default function FormInput({
  label, type, name, handleChange, value,
}) {
  return (
    <Group>
      <Input
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        required
      />
      <FormInputLabel shrink={value.length} htmlFor={label}>
        {label}
      </FormInputLabel>
    </Group>
  );
}

FormInput.propTypes = {
  label: string,
  type: string,
  name: string,
  handleChange: func,
  value: string,
}.isRequired;
