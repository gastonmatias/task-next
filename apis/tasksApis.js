import axios  from "axios";

export const tasksApi = axios.create({
    // baseURL: 'http://localhost:3000/api' // la url base es la carpeta de api de next!
    baseURL: 'https://taskapp-prisma.vercel.app/api' // la url base es la carpeta de api de next!
})
