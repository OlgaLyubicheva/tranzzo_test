import React from 'react';
import MainMenu from './components/MainMenu';
import ConversionForm from './components/ConversionForm';

import './styles.css';

const App = () => {
  return (
    <>
      <header>
        <div className="container header">
          <a href="#" className="logo"><img src="./img/cryptoexch.svg" alt="крипто обмен"/></a>
          <MainMenu>
            <button className="btn btn--sm menu__acc">Личный кабинет</button>
          </MainMenu>
        </div>
      </header>

      <div>
        <main className="container main">
          <div className="main__content">
            <h1>Меняйте валюты как вам удобно!</h1>
            <p>Просто выберите интересующую вас валюту
              из перечня доступых, и мы обменяем ее по самому
              выгодному курсу.
            </p>
            <img src="./img/trustpilot@3x.jpg" alt="trustpilot" className="trustpilot"/>
          </div>

          <div className="main__form">
            <ConversionForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;