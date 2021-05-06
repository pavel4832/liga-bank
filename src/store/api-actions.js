
import * as actions from './actions';
import {APIRoute} from '../const';

export const fetchRates = (date) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.RATES}/${date}?access_key=121d3f25d6fbd201f8ed7949e0226f75&symbols=USD,RUB,GBP,CNY,EUR`)
    .then(({data}) => dispatch(actions.loadRates(data)))
    .then(() => dispatch(actions.setData()))
    .catch(() => dispatch(actions.redirectToRoute(APIRoute.ERROR)))
);
