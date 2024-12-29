import * as React from 'react';

// eslint-disable-next-line react/prop-types
function FilterIcon({ icon, label }) {
  return (
    <div
      className="relative h-32 w-28 md:w-36 md:h-40 bg-primary-300"
      style={{
        clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white-light 
      flex flex-col items-center justify-center"
      >
        <img className="h-11 w-11" src={icon} alt="" />
        <div className="font-roboto text-sm md:text-lg text-white">{label}</div>
      </div>
    </div>
  );
}
export default FilterIcon;
