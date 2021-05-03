import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CONTENT: `movies/changeContent`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_LOGIN_ERROR: `user/setLoginError`,
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export const setLoginError = createAction(ActionType.SET_LOGIN_ERROR);

export const changeContent = createAction(ActionType.CHANGE_CONTENT, (newContent) => {
  return {
    payload: newContent,
  };
});
