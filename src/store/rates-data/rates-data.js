import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  rates: [],
};

const ratesData = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeContent, (state, action) => {
    return {
      ...state,
    };
  });
});

export {ratesData};
