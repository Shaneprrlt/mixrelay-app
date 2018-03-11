import * as types from '../actions/types'
import initialState from './initial-state'

export default (state=initialState.onboarding, action) => {
  switch (action.type) {
    case types.SEND_VERIFICATION_CODE_SUCCESS:
      return {
        ...state,
        phoneNumber: action.phoneNumber,
        errors: []
      }
    case types.SEND_VERIFICATION_CODE_ERROR:
      return {
        ...state,
        phoneNumber: null,
        errors: action.errors
      }
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.username,
        availableUsername: true,
        errors: []
      }
    case types.SET_PASSWORD:
      return {
        ...state,
        password: action.password,
        errors: []
      }
    case types.SET_NAME:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        errors: []
      }
    case types.SET_EMAIL_ADDRESS:
      return {
        ...state,
        emailAddress: action.emailAddress,
        errors: []
      }
    case types.SET_PHONE_NUMBER_VERIFIED:
      return {
        ...state,
        phoneNumberVerified: true,
        errors: []
      }
    case types.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        errors: []
      }
    case types.CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        errors: action.errors
      }
    default:
      return state
  }
}
