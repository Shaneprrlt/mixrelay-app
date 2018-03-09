import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './src/store/store';

const { store, persistor } = configureStore();

import {
  View
} from 'react-native';

import {
  NativeRouter,
  Route
} from 'react-router-native';

// Home
import Home from './src/views/home';
import Login from './src/views/login';

// Onboarding
import OnboardingUsername from './src/views/onboarding/username';
import OnboardingPassword from './src/views/onboarding/password';
import OnboardingName from './src/views/onboarding/name';
import OnboardingEmail from './src/views/onboarding/email';
import OnboardingPhoneNumber from './src/views/onboarding/phone-number';
import OnboardingPhoneVerificationCode from './src/views/onboarding/phone-verification-code';

console.log(store);
console.log(persistor);

const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
      onBeforeLift={() => {}}>
      <NativeRouter>
        <View style={{flex: 1}}>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/onboarding/username'} component={OnboardingUsername} />
          <Route exact path={'/onboarding/password'} component={OnboardingPassword} />
          <Route exact path={'/onboarding/name'} component={OnboardingName} />
          <Route exact path={'/onboarding/email'} component={OnboardingEmail} />
          <Route exact path={'/onboarding/phone-number'} component={OnboardingPhoneNumber} />
          <Route exact path={'/onboarding/phone-verification-code'} component={OnboardingPhoneVerificationCode} />
        </View>
      </NativeRouter>
    </PersistGate>
  </Provider>
);

export default App;
