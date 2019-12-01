import React, { useState } from 'react';

const iconsList = {
  adv: ['./img/icons/advcash.jpg','advcash', 'Advcash'],
  btc: ['./img/icons/bitcoin.jpg','bitcoin', 'Bitcoin'],
  card: ['./img/icons/card.jpg','card', 'Visa/Mastercard UAH'],
  etm: ['./img/icons/etherium.jpg','etherium', 'Etherium ETH'],
};

const ConversionForm = () => {
  const [fSelect, setFSelect] = useState(iconsList.card);
  const [sSelect, setSSelect] = useState(iconsList.etm);

  return (
    <form action="" method="POST" className="convert">
      <h2>Выберете одно из направлений обмена</h2>

      <div className="convert__buttons-group">
        <ConversionForm.PairIcons icons={[iconsList.btc, iconsList.card]}/>
        <ConversionForm.PairIcons icons={[iconsList.btc, iconsList.etm]}/>
        <ConversionForm.PairIcons icons={[iconsList.btc, iconsList.adv]}/>
      </div>

      <ConversionForm.InputBlock select={fSelect} onSelect={setFSelect}>
        Вы отправляете
      </ConversionForm.InputBlock>

      <p className="convert__commis">Комиссия за обмен <span>23 UAH</span></p>

      <ConversionForm.InputBlock select={sSelect} onSelect={setSSelect}>
        Вы получите
      </ConversionForm.InputBlock>

      <label htmlFor="agrees" className="convert__agrees">
        <input type="checkbox" name="" id="agrees"/>
        Я согласен с правилами сервиса
      </label>

      <button type="submit" className="btn convert__btn">Обменять</button>
    </form>
  );
};

ConversionForm.PairIcons = ({ icons }) => (
  <button className="convert__pair box" data-pair={`${icons[0][1]} ${icons[1][1]}`}>
    <img src={icons[0][0]} alt={icons[0][1]} className="icon"></img>
    <div className="arrow"></div>
    <img src={icons[1][0]} alt={icons[1][1]} className="icon"></img>
  </button>
);

ConversionForm.InputBlock = ({ children, select, onSelect }) => (
  <div className="convert__input box">
    <label htmlFor={select[1]}>
      {children}
      <input type="text" defaultValue="1000" className="input" id={select[1]}/>
    </label>
    <div className="select" tabIndex="0">
      <img src={select[0]} alt={select[1]} className="icon icon--sm"/>
      {select[2]}
      <span>&#9013;</span>
    </div>
    {/* <input type="text" value={select[2]} readOnly className="select"/> */}
    <ul className="select__list">
      {
        Object.values(iconsList).map(item => (
          <li key={item[1]} onClick={() => onSelect(item)}>
            <img src={item[0]} alt={item[1]} className="icon icon--sm"/>
            {item[2]}
          </li>
        ))
      }
    </ul>
  </div>
);

export default ConversionForm;