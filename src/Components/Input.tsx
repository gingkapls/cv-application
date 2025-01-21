import { ChangeEventHandler } from 'react';

interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler;
  type?: string;
}

function Input({ name, label, value, type = 'text', onChange }: InputProps) {
  return (
    <>
      <label>
        {label}
        <input name={name} type={type} value={value} onChange={onChange} />
      </label>
    </>
  );
}

export default Input;
