import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Plus() {
  return (
    <>
      <div className='absolute left-0 top-0 translate-x-[calc(-50%-.5px)] translate-y-[calc(-50%-.5px)]'>
        <FontAwesomeIcon
          icon={faPlus}
          className='size-4 text-gray-200'
        />
      </div>
      <div className='absolute right-0 top-0 translate-x-[calc(50%+.5px)] translate-y-[calc(-50%-.5px)]'>
        <FontAwesomeIcon
          icon={faPlus}
          className='size-4 text-gray-200'
        />
      </div>
    </>
  );
}
