import axios from 'axios';

export default axios.create({
    baseURL:'https://tvreviews-1707597591977.azurewebsites.net',
    //headers: {"ngrok-skip-browser-warning": "true"}
});