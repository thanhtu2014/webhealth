import React from 'react';
import column1 from '@/assets/images/blogs/column-1.jpg';
import column2 from '@/assets/images/blogs/column-2.jpg';
import column3 from '@/assets/images/blogs/column-3.jpg';
import column4 from '@/assets/images/blogs/column-4.jpg';
import column5 from '@/assets/images/blogs/column-5.jpg';
import column6 from '@/assets/images/blogs/column-6.jpg';
import column7 from '@/assets/images/blogs/column-7.jpg';
import column8 from '@/assets/images/blogs/column-8.jpg';

function ColumnList() {
  const columns = [
    {
      id: 1,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column1,
    },
    {
      id: 2,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column2,
    },
    {
      id: 3,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column3,
    },
    {
      id: 4,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column4,
    },
    {
      id: 5,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column5,
    },
    {
      id: 6,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column6,
    },
    {
      id: 7,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column7,
    },
    {
      id: 8,
      date: '2021.05.17',
      time: '23:25',
      tags: ['魚料理', '和食', 'DHA'],
      description:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      image: column8,
    },
  ];
  return (
    <div className="w-full pt-14 grid grid-cols-12 gap-x-[10px] gap-y-[18px]">
      {columns.map((entry) => (
        <div
          key={entry.id}
          className="col-span-12 mg:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-2"
        >
          <div className="relative w-full h-60 overflow-hidden rounded-md">
            <img
              src={entry.image}
              alt="column img"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 min-w-36 pl-2 py-2 bg-primary-300">
              <div className="font-roboto text-base text-white-light">
                <span className="mr-2">{entry.date}</span>
                <span>{entry.time}</span>
              </div>
            </div>
          </div>
          <div
            className="font-roboto text-bgprimary text-base overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {entry.description}
          </div>
          <div className="flex gap-2 flex-wrap">
            {entry.tags.map((tag) => (
              <div className="font-roboto text-primary-400">#{tag}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColumnList;
