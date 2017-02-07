import axios from 'axios';

const oneMinute = 60000;
let environment = process.env.NODE_ENV;

environment = 'development';

// @see create-react-app/README.md#adding-custom-environment-variables
// run npm start => 'development',
// run npm test => 'test',
// npm run build => 'production'.

const BASE_URL = {
  production: 'https://grc-ru-dictionary.herokuapp.com/api',
  development: 'http://localhost:7777/api'
};

export const ajax = axios.create({
  headers: { 'Content-Type': 'application/json' },
  timeout: oneMinute,
  
  /**
   * @return {string}
   */
  transformRequest: [
    (data) => {

      // TODO: remove log
      console.log('ajax request data', data);
      return JSON.stringify(data);
    }
  ],
  
  validateStatus: function(status) {
    if (status === 404) {
      return false;
    }
    
    if (status >= 500 && status < 600) {
      return false;
    }
    
    return status >= 200 && status < 300;
  }
});

// Request config
ajax.interceptors.request.use(
  (config) => {
    // Запросы к реальному бекенду
    let url = config.url;
  
    url = `${BASE_URL[environment]}${url}`;
  
    config.url = url;
    
    console.log('config.url', config.url) /*eslint-enable-line */
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
