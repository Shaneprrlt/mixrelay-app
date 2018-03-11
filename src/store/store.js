import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import createMemoryHistory from 'history/createMemoryHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import initialState from '../reducers/initial-state'
import appReducer from '../reducers/app'
import onboardingReducer from '../reducers/onboarding'
import loginReducer from '../reducers/login'

let history = createMemoryHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login']
}

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  login: loginReducer,
  app: appReducer,
  routing: routerReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    composedEnhancers
  )
  let persistor = persistStore(store)
  return { store, persistor, history }
}
