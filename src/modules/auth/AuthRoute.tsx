import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import {AuthScreens} from './screens'

const AuthRoute = () => {
  return (
    <Switch>
      <Route path={AuthScreens.LoginPage.Path} component={LoginPage} />
    </Switch>
  )
}

export default AuthRoute
