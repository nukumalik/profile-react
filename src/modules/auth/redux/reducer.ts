/* eslint-disable indent */
import * as types from './types'

interface InitialState {
  isLoading: boolean
  token?: string
}

interface Action extends InitialState {
  type: string
}

const initialState = {
  isLoading: false,
  token: '',
}

export const AuthReducer = (state: InitialState = initialState, action: Action) => {
  const {isLoading, token, type} = action

  switch (type) {
    case types.SetLogin: {
      return {...state, token}
    }
    case types.SetLoading: {
      return {...state, isLoading}
    }
    default:
      return state
  }
}
