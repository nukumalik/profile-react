/* eslint-disable indent */
import * as types from './types'

export interface IAuthState {
  isLoading: boolean
  token?: string
}

interface Action extends IAuthState {
  type: string
}

const initialState = {
  isLoading: false,
  token: '',
}

export const AuthReducer = (state: IAuthState = initialState, action: Action) => {
  const {isLoading, token, type} = action

  switch (type) {
    case types.SetLogin: {
      return {...state, token}
    }
    case types.SetLoading: {
      return {...state, isLoading}
    }
    case types.SetLogout: {
      return {...state, token: ''}
    }
    default:
      return state
  }
}
