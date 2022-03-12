import {Provider} from 'react-redux'
import {store} from './setup/redux'

function App() {
  return (
    <Provider store={store}>
      <h1>Hello, World!</h1>
    </Provider>
  )
}

export default App
