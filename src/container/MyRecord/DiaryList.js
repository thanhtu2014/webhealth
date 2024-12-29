import React, { Fragment } from 'react';

function DiaryList() {
  const diary = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    date: '2021.05.21',
    time: '23:25',
    note: `私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
        キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`,
  }));
  return (
    <>
      <div className="text-bgprimary text-[22px] font-roboto">MY DIARY</div>
      <div className="w-full grid grid-cols-12 gap-3">
        {diary.map((entry) => (
          <div
            className="col-span-12 mg:col-span-6 md:col-span-4 lg:col-span-3 p-4 border-2 border-bgprimary"
            key={entry.id}
          >
            <div className="text-lg text-bgprimary font-roboto">
              {entry.date}
            </div>
            <div className="text-lg text-bgprimary font-roboto">
              {entry.time}
            </div>
            <div
              className="font-roboto text-bgprimary text-xs overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 7,
              }}
            >
              {entry.note}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DiaryList;
