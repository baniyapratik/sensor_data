import axios from 'axios';
import { FETCH_SUBSCRIPTION } from './types';

export const fetchSubscriptions = () => async dispatch => {
  const res = await axios.get('/api/subscriptions');
  console.log(res);
  dispatch({ type: FETCH_SUBSCRIPTION, payload: res.data });
};
