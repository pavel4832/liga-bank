
import {combineReducers} from 'redux';
import {ratesData} from './rates-data/rates-data';

export const NameSpace = {
  DATA: `DATA`,
};

export default combineReducers({
  [NameSpace.DATA]: ratesData,
});
