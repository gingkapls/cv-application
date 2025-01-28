import { ChangeEventHandler } from 'react';

interface InputProps {
  name: string;
  label: string;
  value: string;
  required?: boolean;
  hint?: string;
  placeholder?: string;
  pattern?: string,
  type?: string;
  onChange: ChangeEventHandler;
}

function Input({
  name,
  label,
  value,
  type = 'text',
  hint,
  required = false,
  pattern,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <>
      <label>
        {label}
        {required && (
          <span className='required' aria-label='required'>
            *
          </span>
        )}
        {hint && (
          <span className='hint' aria-label={`hint: ${hint}`}>
            {hint}
          </span>
        )}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
        />
      </label>
    </>
  );
}

export default Input;
