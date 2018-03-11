import * as types from '../actions/types';
import initialState from './initial-state';
import moment from 'moment';

export default (state=initialState.login, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        accessToken: action.user.token,
        loggedInAt: moment().unix()
      }
    case types.LOGIN_ERROR:
      return {
        ...state,
        user: {},
        accessToken: null,
        errors: action.errors
      }
    case types.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: action.user,
        accessToken: action.user.token,
        loggedInAt: moment().unix()
      }
    default:
      return state
  }
}
