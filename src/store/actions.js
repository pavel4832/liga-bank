import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_MENU: `data/changeMenu`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

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
