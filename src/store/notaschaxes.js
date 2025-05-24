import axios from 'axios';
const notaschaxes = axios.create({
    baseURL: 'http://localhost:3001'
})
export default notaschaxes;