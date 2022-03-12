import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import LoginPage from '../modules/auth/pages/LoginPage'
import {AuthScreens} from '../modules/auth/screens'

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <h1>Dashboard</h1>} exact />
        <Route path="/test" component={() => <h1>Private Bro</h1>} exact />
        <Route path={AuthScreens.LoginPage.Path} component={LoginPage} exact />
        <Route path="*" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRoutes
