import { combineReducers } from 'redux';

import subscriptionReducer from './subscriptionReducer';
export default combineReducers({
  subscriptions: subscriptionReducer
});
