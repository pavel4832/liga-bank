import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import {changeDay, changeCurrencyHave, changeCurrencyGet, saveResult} from "../../store/actions";
import {NUMBER, TIME_FORMAT} from "../../const";

const Converter = () => {
  const {rates, todayDay, endDay, currentDay, currencyHave, currencyGet} = useSelector((state) => state.DATA);
  const isHaveCurrencyRef = useRef();
  const isHaveAmountRef = useRef();
  const isGetCurrencyRef = useRef();
  const isGetAmountRef = useRef();

  const dispatch = useDispatch();

  const getRateIndex = () => {
    const indexHave = (rates.rates[currencyHave]).toFixed(NUMBER.FOR_RATE);
    const indexGet = (rates.rates[currencyGet]).toFixed(NUMBER.FOR_RATE);

    return indexGet / indexHave;
  };

  const changeGetField = () => {
    isGetAmountRef.current.value = (isHaveAmountRef.current.value * getRateIndex()).toFixed(NUMBER.FOR_FIELD);
  };

  const changeHaveField = () => {
    isHaveAmountRef.current.value = (isGetAmountRef.current.value / getRateIndex()).toFixed(NUMBER.FOR_FIELD);
  };

  const clearFields = () => {
    isGetAmountRef.current.value = ``;
    isHaveAmountRef.current.value = ``;
  };

  const getNewCurrencyHave = () => {
    dispatch(changeCurrencyHave(isHaveCurrencyRef.current.value));
    clearFields();
  };

  const getNewCurrencyGet = () => {
    dispatch(changeCurrencyGet(isGetCurrencyRef.current.value));
    clearFields();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(saveResult({
      date: currentDay.format(TIME_FORMAT.ATTRIBUTE),
      amountHave: isHaveAmountRef.current.value,
      currencyHave: isHaveCurrencyRef.current.value,
      amountGet: isGetAmountRef.current.value,
      currencyGet: isGetCurrencyRef.current.value,
    }));
  };

  return (
    <section className="page-main__converter converter">
      <h2 className="converter-title">Конвертер валют</h2>
      <form
        action="#"
        className="converter-form"
        onSubmit={handleSubmit}
      >
        <fieldset className="converter-form__have">
          <legend className="converter-form__legend">У меня есть</legend>
          <div className="convert-form__field">
            <input
              ref={isHaveAmountRef}
              type="text"
              className="converter-form__input"
              onChange={() => {
                changeGetField();
              }}
            />
            <select
              ref={isHaveCurrencyRef}
              name="currency"
              className="converter-form__select"
              onChange={() => {
                getNewCurrencyHave();
              }}
            >
              <option value="RUB" className="converter-form__choice">RUB</option>
              <option value="USD" className="converter-form__choice">USD</option>
              <option value="EUR" className="converter-form__choice">EUR</option>
              <option value="GBP" className="converter-form__choice">GBP</option>
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
            <input
              ref={isGetAmountRef}
              type="text"
              className="converter-form__input"
              onChange={() => {
                changeHaveField();
              }}
            />
            <select
              ref={isGetCurrencyRef}
              name="currency"
              className="converter-form__select"
              onChange={() => {
                getNewCurrencyGet();
              }}
            >
              <option value="USD" className="converter-form__choice">USD</option>
              <option value="RUB" className="converter-form__choice">RUB</option>
              <option value="EUR" className="converter-form__choice">EUR</option>
              <option value="GBP" className="converter-form__choice">GBP</option>
              <option value="CNY" className="converter-form__choice">CNY</option>
            </select>
          </div>
        </fieldset>
        <div className="converter-form__calendar">
          <Flatpickr
            className="converter-form__input"
            value={currentDay.toDate()}
            options={{
              dateFormat: `d-m-Y`,
              minDate: endDay.toDate(),
              maxDate: todayDay.toDate()
            }}
            onChange={(date) => {
              dispatch(changeDay(date));
            }}
          />
        </div>
        <button type="submit" className="converter-form__submit button">
          Сохранить результат
        </button>
      </form>
    </section>
  );
};

export default Converter;
