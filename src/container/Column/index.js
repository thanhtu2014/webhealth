import React from 'react';
import PrimaryButton from '@/components/Button/PrimaryButton';
import RecommendList from './RecommendList';
import ColumnList from './ColumnList';

function ColumnContainer() {
  return (
    <div className="w-screen px-[5vw] pb-16 md:px-[8vw] xl:px-[12vw]">
      <RecommendList />
      <ColumnList />
      <div className="w-full pt-4 flex justify-center">
        <PrimaryButton name="自分の日記をもっと見る" />
      </div>
    </div>
  );
}

export default ColumnContainer;
