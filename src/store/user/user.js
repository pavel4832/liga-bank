import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setLoginError} from '../actions';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isLoginError: false,
  user: {}
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
  builder.addCase(setLoginError, (state) => {
    return {
      ...state,
      isLoginError: true,
    };
  });
});

export {user};
