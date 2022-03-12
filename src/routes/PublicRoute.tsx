import {Switch} from 'react-router-dom'
import AuthRoute from '../modules/auth/AuthRoute'

const PublicRoute = () => {
  return (
    <Switch>
      <AuthRoute />
    </Switch>
  )
}

export default PublicRoute
