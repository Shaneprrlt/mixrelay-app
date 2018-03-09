const Config = {
  'development': {
    api: {
      base_url: 'https://mixrelay.ngrok.io',
      namespace: 'v1',
      version: '1.0.0',
      client_token: 'fe9e1aa96cb75061'
    },
    keys: {}
  },
  'staging': {
    api: {
      base_url: 'https://staging-api.mixrelayapp.com',
      namespace: 'v1',
      version: '1.0.0',
      client_token: ''
    },
    keys: {}
  },
  'production': {
    api: {
      base_url: 'https://api.mixrelayapp.com',
      namespace: 'v1',
      version: '1.0.0',
      client_token: ''
    },
    keys: {}
  }
};

export default Config;
