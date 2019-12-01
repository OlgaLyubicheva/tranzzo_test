import React, { useState } from 'react';

const menuList = ['Обменять', 'Резервы', 'Как мы работаем', 'FAQ', 'Документы'];

const MainMenu = ({ children }) => {
  const [showMenu, setMenuStatus] = useState(false);

  return (
    <div className="menu">
      <nav className={`menu__nav ${showMenu ? 'menu__nav--show' : ''}`}>
        <ul>
          {
            menuList.map(item => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))
          }
        </ul>
      </nav>

      {children}

      <MainMenu.Button showMenu={showMenu} forClick={setMenuStatus} />
    </div>
  );
};

MainMenu.Button = ({ showMenu, forClick }) => (
  <div
    className={`menu__btn ${showMenu ? 'menu__btn--close' : ''}`}
    onClick={() => forClick(!showMenu)}
  >
    <div className="menu__btn-line"></div>
    <div className="menu__btn-line"></div>
    <div className="menu__btn-line"></div>
  </div>
);

export default MainMenu;
