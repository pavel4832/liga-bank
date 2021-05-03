
import {combineReducers} from 'redux';
import {ratesData} from './rates-data/rates-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: ratesData,
  [NameSpace.USER]: user,
});
