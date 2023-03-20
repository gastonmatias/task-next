import axios  from "axios";

const tasksApi = axios.create({
    baseURL: 'http://localhost:3000/api' // la url base es la carpeta de api de next!
})

export default tasksApi;