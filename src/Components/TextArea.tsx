import { ChangeEventHandler } from 'react';

interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  rows?: number;
  cols?: number;
  onChange: ChangeEventHandler;
}

function TextArea({
  name,
  label,
  value,
  rows = 2,
  cols = 20,
  onChange,
}: TextAreaProps) {
  return (
    <>
      <label>
        {label}
        <textarea
          name={name}
          rows={rows}
          cols={cols}
          onChange={onChange}
          value={value}
        ></textarea>
      </label>
    </>
  );
}

export default TextArea;
