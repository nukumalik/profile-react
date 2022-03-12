import {useFormik} from 'formik'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as Yup from 'yup'
import {setLogin} from '../redux/actions'
import {useHistory} from 'react-router-dom'

const LoginPage = () => {
  // Variables
  const dispatch = useDispatch()
  const history = useHistory()
  const {isLoading, token} = useSelector((state: any) => state.Auth)
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Field is required'),
      password: Yup.string().required('Field is required'),
    }),
    onSubmit: values => {
      dispatch(setLogin(values.username, values.password))
    },
  })

  // Hooks
  useEffect(() => {
    if (token) history.push('/')
  }, [token])

  return (
    <div className="bg-light min-vh-100 min-vw-100 d-flex align-items-center justify-content-center">
      <div className="card border-0 shadow">
        <div className="card-header bg-primary text-center py-4">
          <span className="fw-bold fs-3 text-white">Login Form</span>
        </div>
        <div className="card-body p-4">
          <form onSubmit={formik.handleSubmit} noValidate data-testid="loginForm">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                {...formik.getFieldProps('username')}
                type="text"
                className="form-control"
                data-testid="usernameField"
                tabIndex={1}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                {...formik.getFieldProps('password')}
                type="password"
                className="form-control"
                data-testid="passwordField"
                tabIndex={2}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              tabIndex={3}
              data-testid="submitButton"
              disabled={isLoading}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
