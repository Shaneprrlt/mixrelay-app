import * as types from './types'
import api from '../services/api'
import { push, replace } from 'react-router-redux'

const sendVerificationCodeSuccess = (phoneNumber) => {
  return {
    type: types.SEND_VERIFICATION_CODE_SUCCESS,
    phoneNumber: phoneNumber
  }
}

const sendVerificationCodeError = (errors) => {
  return {
    type: types.SEND_VERIFICATION_CODE_ERROR,
    errors: errors
  }
}

export const sendVerificationCode = (phoneNumber, nextRoute=null) => {
  return async (dispatch) => {
    try {
      await api.sendVerificationCode(phoneNumber)
      dispatch(sendVerificationCodeSuccess(phoneNumber))

      if(nextRoute) {
        dispatch(push(nextRoute))
      }
    } catch(e) {
      dispatch(sendVerificationCodeError(e))
    }
  }
}

export const setUsername = (username, nextRoute=null) => {
  return (dispatch) => {
    dispatch({ type: types.SET_USERNAME, username: username })

    if(nextRoute) {
      dispatch(push(nextRoute))
    }
  }
}

export const setPassword = (password, nextRoute=null) => {
  return (dispatch) => {
    dispatch({ type: types.SET_PASSWORD, password: password })

    if(nextRoute) {
      dispatch(push(nextRoute))
    }
  }
}

export const setName = (firstName, lastName, nextRoute=null) => {
  return (dispatch) => {
    dispatch({ type: types.SET_NAME, firstName: firstName, lastName: lastName })

    if(nextRoute) {
      dispatch(push(nextRoute))
    }
  }
}

export const setEmailAddress = (emailAddress, nextRoute=null) => {
  return (dispatch) => {
    dispatch({ type: types.SET_EMAIL_ADDRESS, emailAddress: emailAddress })

    if(nextRoute) {
      dispatch(push(nextRoute))
    }
  }
}

export const setPhoneNumberVerified = (nextRoute=null) => {
  return (dispatch) => {
    dispatch({ type: types.SET_PHONE_NUMBER_VERIFIED })

    if(nextRoute) {
      dispatch(replace(nextRoute))
    }
  }
}

const createAccountSuccess = (user) => {
  return {
    type: types.CREATE_ACCOUNT_SUCCESS,
    user: user
  }
}

const createAccountError = (errors) => {
  return {
    type: types.CREATE_ACCOUNT_ERROR,
    errors: errors
  }
}

export const createAccount = (onboardingState, nextRoute=null) => {
  return async (dispatch) => {
    try {
      const payload = {
        user: {
          username: onboardingState.username,
          password: onboardingState.password,
          email: onboardingState.emailAddress,
          firstName: onboardingState.firstName,
          lastName: onboardingState.lastName,
          phoneNumber: onboardingState.phoneNumber,
          phoneVerified: onboardingState.phoneNumberVerified
        }
      }
      let responsePayload = await api.createAccount(payload)
      dispatch(createAccountSuccess(responsePayload.user))
      dispatch(push(nextRoute))
    } catch (e) {
      dispatch(createAccountError(e))
    }
  }
}





















///
