import { ChangeEventHandler } from 'react';

interface InputProps {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: ChangeEventHandler;
}

function Input({
  name,
  label,
  value,
  type = 'text',
  placeholder,
  onChange,
}: InputProps) {
  return (
    <>
      <label>
        {label}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

export default Input;
