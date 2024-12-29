import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const data = [
  { id: 1, month: '6月', value1: 100, value2: 100 },
  { id: 2, month: '7月', value1: 93, value2: 97 },
  { id: 3, month: '8月', value1: 80, value2: 70 },
  { id: 4, month: '9月', value1: 79, value2: 86 },
  { id: 5, month: '10月', value1: 66, value2: 80 },
  { id: 6, month: '11月', value1: 65, value2: 70 },
  { id: 7, month: '12月', value1: 63, value2: 83 },
  { id: 8, month: '1月', value1: 50, value2: 71 },
  { id: 9, month: '2月', value1: 43, value2: 63 },
  { id: 10, month: '3月', value1: 30, value2: 58 },
  { id: 11, month: '4月', value1: 25, value2: 48 },
  { id: 12, month: '5月', value1: 20, value2: 52 },
];

function MyLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="linear"
          dataKey="value1"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
        <Line
          type="linear"
          dataKey="value2"
          stroke="#FFD700"
          strokeWidth={2}
          dot={{ r: 3 }}
        />

        {data.map((entry) => (
          <ReferenceLine
            key={entry.id}
            x={entry.month}
            stroke="#ffffff"
            strokeWidth={1}
            strokeOpacity={0.5}
          />
        ))}

        <XAxis
          dataKey="month"
          stroke="#ddd"
          padding={{ left: 30, right: 30 }}
          axisLine={false}
        />
        <Tooltip contentStyle={{ backgroundColor: '#333', color: '#fff' }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MyLineChart;
