import React from 'react';
import PrimaryButton from '@/components/Button/PrimaryButton';
import RecordFilter from './RecordFilter';
import RecordChart from './RecordChart';
import RecordList from './RecordList';
import DiaryList from './DiaryList';

function MyRecordContainer() {
  return (
    <div className="w-screen px-[5vw] pt-14 pb-16 md:px-[8vw] xl:px-[12vw] flex flex-col gap-14">
      <RecordFilter />
      <RecordChart />
      <RecordList />
      <div className="flex flex-col gap-2">
        <DiaryList />
        <div className="w-full pt-4 flex justify-center">
          <PrimaryButton name="自分の日記をもっと見る" />
        </div>
      </div>
    </div>
  );
}

export default MyRecordContainer;
