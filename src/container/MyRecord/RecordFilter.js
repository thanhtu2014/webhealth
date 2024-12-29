import React from 'react';
import myRecommend1 from '@/assets/images/news/MyRecommend-1.jpg';
import myRecommend2 from '@/assets/images/news/MyRecommend-2.jpg';
import myRecommend3 from '@/assets/images/news/MyRecommend-3.jpg';

function RecordFilter() {
  const cardData = [
    {
      id: 1,
      label: 'BODY RECORD',
      description: '自分のカラダの記録',
      image: myRecommend1,
    },
    {
      id: 2,
      label: 'MY EXERCISE',
      description: '自分の運動の記録',
      image: myRecommend2,
    },
    {
      id: 3,
      label: 'MY DIARY',
      description: '自分の日記',
      image: myRecommend3,
    },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row gap-[4vw]">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="relative w-full sm:w-1/3 aspect-square p-2 md:p-4 lg:p-6 bg-primary-300 
        flex items-center justify-center"
        >
          <img
            src={card.image}
            alt="card-img"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition ease-in-out duration-300"
          />
          <div
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        flex flex-col items-center gap-2"
          >
            <div className="font-roboto px-2 text-3xl sm:text-2xl md:text-3xl text-primary-300 text-center">
              {card.label}
            </div>
            <div className="w-40 sm:w-fit md:w-40 px-2 py-1 bg-primary-400 flex item justify-center items-center">
              <div className="font-roboto text-white-light text-sm ">
                {card.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecordFilter;
