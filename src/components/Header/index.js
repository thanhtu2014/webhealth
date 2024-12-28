import React, { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import menuIcon from '@/assets/images/icons/icon_menu.png';
import closeIcon from '@/assets/images/icons/icon_close.png';
import memoIcon from '@/assets/images/icons/icon_memo.png';
import challengeIcon from '@/assets/images/icons/icon_challenge.png';
import infoIcon from '@/assets/images/icons/icon_info.png';

const BADGE_STYLES = `
      bg-orange-500 
      text-white 
      text-xs 
      rounded-full 
      w-5 h-5 
      flex 
      items-center 
      justify-center`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuMobile = [
    { id: 1, label: '自分の記録', url: '/my-records' },
    { id: 2, label: '体重グラフ', url: '/weight-graph' },
    { id: 3, label: '目標', url: '/goals' },
    { id: 4, label: '選択中のコース', url: '/current-course' },
    { id: 5, label: 'コラム一覧', url: '/columns' },
    { id: 6, label: '設定', url: '/settings' },
  ];

  const menuItems = [
    { id: 1, label: '自分の記録', icon: memoIcon, url: '/my-records' },
    { id: 2, label: 'チャレンジ', icon: challengeIcon, url: '/challenges' },
    {
      id: 3,
      label: 'お知らせ',
      icon: infoIcon,
      url: '/notifications',
    },
  ];

  return (
    <nav className="bg-bgprimary text-orange-500 flex items-center justify-between px-20 md:px-40 py-4 relative">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Healthy Logo" className="h-8 w-auto" />
        </a>
      </div>

      <div className="flex flex-rows gap-4 justify-center items-center relative">
        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="text-sm hover:text-orange-300 transition flex items-center gap-2"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-6 h-6"
                  aria-hidden="true"
                />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={BADGE_STYLES}>{item.badge}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="">
          <button
            className="flex items-center justify-center cursor-pointer ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsMenuOpen(!isMenuOpen);
              }
            }}
            type="button"
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <img src={menuIcon} alt="Menu" className="w-6 h-6" />
            ) : (
              <img src={closeIcon} alt="close" className="w-6 h-6" />
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-[17.5rem] bg-gray-400 text-white z-50 shadow-lg ">
              <ul className="flex flex-col">
                {menuMobile.map((item) => (
                  <li
                    key={item.id}
                    className="
                        hover:bg-gray-600 
                        py-6 pl-8 text-left 
                        border-t border-t-white-light 
                        border-b border-b-dark-600"
                  >
                    <a href={item.url}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
