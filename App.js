import React from 'react';

import {
  View
} from 'react-native';

import {
  NativeRouter,
  Route
} from 'react-router-native';

// Home
import Home from './views/home';
import Login from './views/login';

// Onboarding
import OnboardingUsername from './views/onboarding/username';
import OnboardingPassword from './views/onboarding/password';
import OnboardingName from './views/onboarding/name';
import OnboardingEmail from './views/onboarding/email';
import OnboardingPhoneNumber from './views/onboarding/phone-number';

const App = () => (
  <NativeRouter>
    <View style={{flex: 1}}>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/login'} component={Login} />
      <Route exact path={'/onboarding/username'} component={OnboardingUsername} />
      <Route exact path={'/onboarding/password'} component={OnboardingPassword} />
      <Route exact path={'/onboarding/name'} component={OnboardingName} />
      <Route exact path={'/onboarding/email'} component={OnboardingEmail} />
      <Route exact path={'/onboarding/phone-number'} component={OnboardingPhoneNumber} />
    </View>
  </NativeRouter>
);

export default App;
