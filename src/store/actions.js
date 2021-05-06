import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_MENU: `data/changeMenu`,
  CHANGE_DAY: `data/changeDay`,
  CHANGE_CURRENCY_HAVE: `data/changeCurrencyHave`,
  CHANGE_CURRENCY_GET: `data/changeCurrencyGet`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  SAVE_RESULT: `data/saveResult`,
  CLEAR_HISTORY: `data/clearHistory`,
  LOAD_RATES: `data/loadRates`,
  SET_DATA: `data/setData`,
};

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export const changeMenu = createAction(ActionType.CHANGE_MENU, (newMenu) => {
  return {
    payload: newMenu,
  };
});

export const changeDay = createAction(ActionType.CHANGE_DAY, (newDay) => {
  return {
    payload: newDay,
  };
});

export const changeCurrencyHave = createAction(ActionType.CHANGE_CURRENCY_HAVE, (newCurrency) => {
  return {
    payload: newCurrency,
  };
});

export const changeCurrencyGet = createAction(ActionType.CHANGE_CURRENCY_GET, (newCurrency) => {
  return {
    payload: newCurrency,
  };
});

export const saveResult = createAction(ActionType.SAVE_RESULT, (newResult) => {
  return {
    payload: newResult,
  };
});

export const clearHistory = createAction(ActionType.CLEAR_HISTORY);

export const loadRates = createAction(ActionType.LOAD_RATES, (rates) => {
  return {
    payload: rates,
  };
});

export const setData = createAction(ActionType.SET_DATA);
