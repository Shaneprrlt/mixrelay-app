const initialState = {
  onboarding: {
    username: '',
    availableUsername: null,
    password: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
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
