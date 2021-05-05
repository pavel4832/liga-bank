import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization} from '../actions';
import {AuthorizationStatus} from '../../const';
import userMock from '../../mock/user';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: userMock
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
});

export {user};
