import * as types from './types';
import api from '../services/api';

const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    user: user
  }
}

const loginError = (errors) => {
  return {
    type: types.LOGIN_ERROR,
    errors: errors
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      let user = await api.login(username, password);
      return loginSuccess(user);
    } catch (e) {
      return loginError(e);
    }
  }
}
