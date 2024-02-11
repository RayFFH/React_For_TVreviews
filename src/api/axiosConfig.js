import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tvreviews-1707597591977.azurewebsites.net',
  });
  
  // Add CORS headers
  api.defaults.headers.common['Access-Control-Allow-Origin'] = 'localhost:3000';
  
  export default api;