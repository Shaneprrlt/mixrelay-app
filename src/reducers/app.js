import * as types from '../actions/types';
import initialState from './initial-state';

export default (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
