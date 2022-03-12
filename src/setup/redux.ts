import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import storage from 'redux-persist/es/storage'
import {persistStore, persistReducer} from 'redux-persist'

// Reducers
import {AuthReducer, IAuthState} from '../modules/auth/redux/reducer'

// Persist
const persistConfig = {
  key: 'root',
  storage,
}

export interface RootReducer {
  Auth: IAuthState
}

const reducers = persistReducer(
  persistConfig,
  combineReducers({
    Auth: AuthReducer,
  })
)

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
