import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';

interface FormActionProps {
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}

function FormActions({ handleDelete }: FormActionProps) {
  return (
    <div className='btn-container'>
      <button
        className='btn-delete btn'
        type='submit'
        aria-label='Delete Item'
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <button className='btn-save btn' type='submit'>
        Save
      </button>
    </div>
  );
}

export default FormActions;
