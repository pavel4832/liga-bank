import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {MENU_TYPE, CURRENCY} from "../../const";
import dayjs from 'dayjs';

const initialState = {
  rates: {},
  historyRecords: [],
  todayDay: dayjs(),
  currentDay: dayjs(),
  endDay: dayjs().subtract(7, `day`),
  currencyHave: CURRENCY.RUB,
  currencyGet: CURRENCY.USD,
  menuType: MENU_TYPE.CONVERTER,
  isDataLoaded: false,
};

const getNewResults = (arr, element) => {
  let newArr = arr.slice();

  if (arr.length < 10) {
    newArr.unshift(element);
  } else {
    newArr = newArr.splice(0, 9);
    newArr.unshift(element);
  }

  return newArr;
};

const ratesData = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeMenu, (state, action) => {
    return {
      ...state,
      menuType: action.payload,
    };
  });

  builder.addCase(actions.changeDay, (state, action) => {
    return {
      ...state,
      currentDay: dayjs(action.payload),
      isDataLoaded: false,
    };
  });

  builder.addCase(actions.changeCurrencyHave, (state, action) => {
    return {
      ...state,
      currencyHave: action.payload,
    };
  });

  builder.addCase(actions.changeCurrencyGet, (state, action) => {
    return {
      ...state,
      currencyGet: action.payload,
    };
  });

  builder.addCase(actions.saveResult, (state, action) => {
    return {
      ...state,
      historyRecords: getNewResults(state.historyRecords, action.payload),
    };
  });

  builder.addCase(actions.clearHistory, (state) => {
    return {
      ...state,
      historyRecords: [],
    };
  });

  builder.addCase(actions.loadRates, (state, action) => {
    return {
      ...state,
      rates: action.payload,
    };
  });

  builder.addCase(actions.setData, (state) => {
    return {
      ...state,
      isDataLoaded: true,
    };
  });
});

export {ratesData};
