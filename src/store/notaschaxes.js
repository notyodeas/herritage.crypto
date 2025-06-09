import axios from 'axios';
const notaschaxes = axios.create({
    baseURL: 'https://herritagebackend.onrender.com'
})
export default notaschaxes;