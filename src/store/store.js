import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import initialState from '../reducers/initial-state';
import appReducer from '../reducers/app'
import onboardingReducer from '../reducers/onboarding';
import loginReducer from '../reducers/login'

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const persistConfig = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  login: loginReducer,
  app: appReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    composedEnhancers
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
