import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import MainRoutes from './routes/MainRoutes'
import {persistor, store} from './setup/redux'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainRoutes />
      </PersistGate>
    </Provider>
  )
}

export default App
