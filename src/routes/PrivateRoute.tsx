import {Route, Switch} from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <Switch>
      <Route path="/private" component={() => <h1>Private Routes</h1>} />
    </Switch>
  )
}

export default PrivateRoute
