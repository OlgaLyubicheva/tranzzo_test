import React from 'react';

const menuList = ['Обменять', 'Резервы', 'Как мы работаем', 'FAQ', 'Документы'];

const MainMenu = ({ children }) => (
  <div className="menu">
    <nav className="menu__nav">
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
  </div>
);

export default MainMenu;