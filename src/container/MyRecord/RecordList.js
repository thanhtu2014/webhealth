import React from 'react';

function RecordList() {
  const exercises = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: '家事全般（立位・軽い）',
    time: '10 min',
    kcal: 26,
  }));

  return (
    <div className="h-[45vh] px-6 py-4 bg-black text-white-light flex flex-col gap-3">
      <div className="flex items-center justify-start gap-4">
        <pre className="whitespace-pre-wrap font-roboto text-lg leading-6 font-light">
          {`MY 
EXCERCISE`}
        </pre>
        <div className="font-roboto text-[22px]">2021.05.21</div>
      </div>
      <div className="flex-1 w-full overflow-y-auto scrollbar-custom">
        <div className="max-w-full mr-6 grid grid-cols-12 sm:gap-x-10">
          {exercises.map((exercise) => (
            <div
              className="col-span-12 sm:col-span-6 flex justify-between py-2 mb-2 border-b border-gray-400"
              key={exercise.id}
            >
              <div className="flex gap-2 before:content-['•'] before:mr-1 before:relative">
                <div className="flex flex-col justify-start">
                  <div className="font-roboto text-sm ">{exercise.name}</div>
                  <div className="font-roboto text-sm text-primary-300">
                    {exercise.kcal}kcal
                  </div>
                </div>
              </div>
              <div className="font-roboto text-sm text-primary-300">
                {exercise.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecordList;
