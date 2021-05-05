import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {MENU_TYPE} from "../../const";

const initialState = {
  rates: [],
  menuType: MENU_TYPE.CONVERTER,
};

const ratesData = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeMenu, (state, action) => {
    return {
      ...state,
      menuType: action.payload,
    };
  });
});

export {ratesData};
