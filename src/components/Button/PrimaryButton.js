/* eslint-disable react/prop-types */
import React from 'react';

function PrimaryButton({ name, buttonType, customClass }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType ?? 'button'}
      className={`py-[14px] px-1 w-72 rounded-lg text-white-light 
        bg-gradient-to-bl from-primary-400 to-primary-300 ${customClass}`}
    >
      {name}
    </button>
  );
}

export default PrimaryButton;
