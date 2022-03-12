import {AxiosStatic} from 'axios'
import {setLogout} from '../modules/auth/redux/actions'

export const setupAxios = (axios: AxiosStatic, store: any) => {
  axios.defaults.baseURL = 'https://nukumalik-profile-api.herokuapp.com/api/v1'

  // Request Interceptor
  axios.interceptors.request.use(
    (config: any) => {
      const {
        Auth: {token},
      } = store.getState()

      if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    error => Promise.reject(error)
  )

  // Response Interceptor
  axios.interceptors.response.use(
    response => response,
    error => {
      const {
        Auth: {token},
      } = store.getState()
      const {dispatch} = store

      if (error.response.status === 401 && token) {
        dispatch(setLogout())
      }

      return Promise.reject(error)
    }
  )
}
