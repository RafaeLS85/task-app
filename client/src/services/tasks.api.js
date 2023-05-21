import axios from 'axios';
import { VITE_TASK_SERVICE } from '../constants/environment';


const taskApi = axios.create({
    baseURL: VITE_TASK_SERVICE + '/tasks/api/v1/tasks/'
})

export const getTasks = () => taskApi.get('/')

export const createTasks = (task) => taskApi.post('/', task)

