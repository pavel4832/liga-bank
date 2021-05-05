import React from 'react';

const Converter = () => {
  return (
    <section className="page-main__converter converter">
      <h2 className="converter-title">Конвертер валют</h2>
      <form action="#" className="converter-form">
        <fieldset className="converter-form__have">
          <legend className="converter-form__legend">У меня есть</legend>
          <div className="convert-form__field">
            <input type="number" className="converter-form__input"/>
            <select name="currancy" className="converter-form__select">
              <option value="RUB" className="converter-form__choice">RUB</option>
              <option value="USD" className="converter-form__choice">USD</option>
              <option value="EUR" className="converter-form__choice">EUR</option>
              <option value="GBR" className="converter-form__choice">GBR</option>
              <option value="CNY" className="converter-form__choice">CNY</option>
            </select>
          </div>
        </fieldset>
        <div className="converter-form__image">
          <span className="converter-form__icon converter-form__icon--left"></span>
          <span className="converter-form__icon converter-form__icon--right"></span>
        </div>
        <fieldset className="converter-form__get">
          <legend className="converter-form__legend">Хочу приобрести</legend>
          <div className="convert-form__field">
            <input type="number" className="converter-form__input"/>
            <select name="currancy" className="converter-form__select">
              <option value="USD" className="converter-form__choice">USD</option>
              <option value="RUB" className="converter-form__choice">RUB</option>
              <option value="EUR" className="converter-form__choice">EUR</option>
              <option value="GBR" className="converter-form__choice">GBR</option>
              <option value="CNY" className="converter-form__choice">CNY</option>
            </select>
          </div>
        </fieldset>
        <div className="converter-form__calendar">
          <input type="text" className="converter-form__input"/>
        </div>
        <button type="submit" className="converter-form__submit button">Сохранить результат</button>
      </form>
    </section>
  );
};

export default Converter;
