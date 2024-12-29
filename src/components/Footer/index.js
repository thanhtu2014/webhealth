import React from 'react';

function Footer() {
  const menuItems = [
    { id: 1, label: '会員登録' },
    { id: 2, label: '運営会社' },
    { id: 3, label: '利用規約' },
    { id: 4, label: '個人情報の取扱について' },
    { id: 5, label: '特定商取引法に基づく表記' },
    { id: 6, label: 'お問い合わせ' },
  ];

  return (
    <nav
      className="bg-bgprimary flex flex-wrap items-center justify-start gap-5 sm:gap-11 
      px-[5vw] md:pl-[12.5vw] py-10 md:py-14"
    >
      {menuItems.map((item) => (
        <div className="font-roboto text-xs text-white-light" key={item.id}>
          {item.label}
        </div>
      ))}
    </nav>
  );
}

export default Footer;
