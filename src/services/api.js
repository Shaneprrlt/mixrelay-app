import axios from 'axios';
import Config from '../config';

class Api {
  settings = {}

  constructor(env) {
    this.settings = Config[env].api;
  }

  // Sessions

  login(username, password) {
    return this.post('sessions/login', {
      username: username,
      password: password
    });
  }

  // Users

  createUser(userData={}) {
    return this.post('users', userData);
  }

  // Private Methods

  load(url) {
    return this.request('get', url);
  }

  post(url, data={}) {
    return this.request('post', url, data);
  }

  put(url, data={}) {
    return this.request('put', url, data);
  }

  delete(url, data={}) {
    return this.request('delete', url, data);
  }

  request(method, url, data={}) {
    return new Promise((resolve, reject) => {
      let options = {
        method: method,
        url: this.baseUrl() + url,
        headers: this.headers(),
      };
      if(method.toLowerCase() !== 'get') {
        options.data = data;
      }
      axios(options)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  baseUrl() {
    return this.settings.base_url + '/' + this.settings.namespace + '/';
  }

  headers() {
    let bearerToken = null;
    if(bearerToken) {
      return {
        'Content-Type': 'application/json',
        'Api-Version': this.settings.version,
        'Authorization': `Bearer ${bearerToken}`
      }
    } else {
      return {
        'Content-Type': 'application/json',
        'Api-Version': this.settings.version,
        'Authorization': `Client ${this.settings.client_token}`
      }
    }
  }
}

export default new Api(process.env.NODE_ENV);
