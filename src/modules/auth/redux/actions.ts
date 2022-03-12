import * as types from './types'
import axios from 'axios'
import {Dispatch} from 'react'

interface SetLoginDispatch {
  type: string
  token: string
}

interface SetLoadingDispatch {
  type: string
  isLoading: boolean
}

export const setLogin = (username: string, password: string) => {
  return async (dispatch: Dispatch<SetLoginDispatch | SetLoadingDispatch>) => {
    dispatch({type: types.SetLoading, isLoading: true})
    try {
      const res = await axios.post('/auth/login', {
        username,
        password,
      })

      dispatch({type: types.SetLogin, token: res.data?.data?.token})
      dispatch({type: types.SetLoading, isLoading: false})
    } catch (error) {
      dispatch({type: types.SetLogin, token: ''})
      dispatch({type: types.SetLoading, isLoading: false})
    }
  }
}

export const setLogout = () => (dispatch: Dispatch<{type: string}>) => {
  dispatch({type: types.SetLogout})
}
