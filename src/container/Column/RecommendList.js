import React from 'react';

function RecommendList() {
  const cardData = [
    { id: 1, title: 'RECOMMENDED COLUMN', subtitle: 'オススメ' },
    { id: 2, title: 'RECOMMENDED DIET', subtitle: 'ダイエット' },
    { id: 3, title: 'RECOMMENDED BEAUTY', subtitle: '美容' },
    { id: 4, title: 'RECOMMENDED HEALTH', subtitle: '健康' },
  ];

  return (
    <div className="w-full pt-14 grid grid-cols-12 gap-1 mg:gap-2 lg:gap-x-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="col-span-12 mg:col-span-6 lg:col-span-3 h-20 mg:h-24 lg:h-36 px-2 bg-dark-600 
      flex items-center justify-center"
        >
          <div className="w-full flex flex-col items-center gap-2">
            <div className="font-roboto text-lg md:text-2xl text-primary-300 text-center">
              {card.title}
            </div>
            <hr className="w-1/4 h-[2px] border-white-light" />
            <div className="font-roboto text-white-light text-sm text-center">
              {card.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecommendList;
