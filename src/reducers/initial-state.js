const initialState = {
  onboarding: {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    phoneNumberVerified: false,
    errors: []
  },
  login: {
    user: {},
    accessToken: {},
    loggedInAt: null,
    errors: []
  }
};

export default initialState;
