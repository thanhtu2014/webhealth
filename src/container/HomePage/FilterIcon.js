import * as React from 'react';
import filterMeal from '@/assets/images/icons/filter_meal.png';
import filterSnack from '@/assets/images/icons/filter_snack.png';

// eslint-disable-next-line react/prop-types
function FilterIcon({ isSnack, label }) {
  return (
    <div className="relative w-20 h-20 mg:w-28 mg:h-28 md:w-32 md:h-32">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={isSnack ? filterSnack : filterMeal}
        alt=""
      />
      <div className="absolute bottom-4 md:bottom-7 left-1/2 transform -translate-x-1/2">
        <div className="font-roboto text-sm mg:text-lg md:text-xl text-white-light">
          {label}
        </div>
      </div>
    </div>
  );
}
export default FilterIcon;
