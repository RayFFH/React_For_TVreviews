import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tvreviews-1707597591977.azurewebsites.net',
  });
  
  // Add CORS headers
  api.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://rayffh.github.io/React_For_TVreviews/';
  
  export default api;