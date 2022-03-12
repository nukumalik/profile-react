import {fireEvent, render, screen} from '@testing-library/react'
import LoginPage from '../pages/LoginPage'

describe('Test login page', () => {
  render(<LoginPage />)

  const username = screen.getByTestId('usernameField')
  const password = screen.getByTestId('passwordField')
  const submit = screen.getByTestId('submitButton')
  const form = screen.getByTestId('loginForm')

  it('check username field', () => {
    const exp = expect(username)
    exp.toBeDefined()
    exp.toHaveAttribute('required')
    exp.toHaveAttribute('tabIndex', '1')
    exp.toHaveAttribute('type', 'text')
  })

  it('check password field', () => {
    const exp = expect(password)
    exp.toBeDefined()
    exp.toHaveAttribute('required')
    exp.toHaveAttribute('tabIndex', '2')
    exp.toHaveAttribute('type', 'password')
  })

  it('check submit button', () => {
    const exp = expect(submit)
    exp.toBeDefined()
    exp.toHaveAttribute('tabIndex', '3')
    exp.toHaveAttribute('type', 'submit')
  })

  it('check login form', () => {
    fireEvent.change(username, {target: {value: 'admin'}})
    fireEvent.change(password, {target: {value: 'admin'}})
    fireEvent.click(submit)
    expect(form).toHaveFormValues({username: 'admin', password: 'admin'})
  })
})
