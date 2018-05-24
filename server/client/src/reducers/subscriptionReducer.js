import { FETCH_SUBSCRIPTION } from '../actions/types';

export default function(state = null, action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_SUBSCRIPTION:
      return action.payload || false;

    default:
      return state;
  }
}
