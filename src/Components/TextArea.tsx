import { ChangeEventHandler } from 'react';

interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  hint?: string;
  rows?: number;
  cols?: number;
  onChange: ChangeEventHandler;
}

function TextArea({
  name,
  label,
  value,
  placeholder,
  hint,
  rows = 2,
  cols = 20,
  onChange,
}: TextAreaProps) {
  return (
    <>
      <label>
        {label}
        {hint && <span className='hint'>{hint}</span>}
        <textarea
          name={name}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></textarea>
      </label>
    </>
  );
}

export default TextArea;
