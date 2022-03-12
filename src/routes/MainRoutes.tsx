import {BrowserRouter} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const MainRoutes = () => {
  const isAuth = false

  if (isAuth)
    return (
      <BrowserRouter>
        <PrivateRoute />
      </BrowserRouter>
    )

  return (
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>
  )
}

export default MainRoutes
