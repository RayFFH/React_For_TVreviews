import axios from 'axios';

const api = axios.create({
    baseURL:'https://localhost:8080',

});
    
    //headers: {"ngrok-skip-browser-warning": "true"}
    api.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://rayffh.github.io/React_For_TVreviews/';


    export default api;

