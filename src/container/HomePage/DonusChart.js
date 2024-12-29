import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function DonusChart() {
  const dataPercent = {
    current: 16,
    total: 21,
  };
  const percentage = (dataPercent.current / dataPercent.total).toFixed(2) * 100;
  const data = [
    { id: 2, name: 'Completed', value: percentage, color: 'white' },
    {
      id: 1,
      name: 'Remaining',
      value: 100 - percentage,
      color: 'transparent',
    },
  ];

  return (
    <div className="w-48 h-w-48 relative">
      <PieChart width={192} height={192}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={67}
          outerRadius={70}
          startAngle={90}
          endAngle={-270}
          stroke="transparent"
        >
          {data.map((entry) => (
            <Cell key={entry.id} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-end justify-center gap-1">
          <span className="font-roboto text-lg text-white-light">
            {dataPercent.total - dataPercent.current}/{dataPercent.total}
          </span>
          <span className="font-roboto text-2xl text-white-light">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default DonusChart;
