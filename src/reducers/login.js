import * as types from '../actions/types';
import initialState from './initial-state';
import moment from 'moment';

export default (state=initialState.login, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        accessToken: action.user.accessToken,
        loggedInAt: moment().unix()
      }
    case types.LOGIN_ERROR:
      return {
        ...state,
        user: {},
        accessToken: null,
        errors: action.errors
      }
    default:
      return state
  }
}
