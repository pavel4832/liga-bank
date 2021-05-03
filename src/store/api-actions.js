
import * as actions from './actions';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH)))
);
