import axios from 'axios';
import { VITE_TASK_SERVICE } from '../constants/environment';


const taskApi = axios.create({
    baseURL: VITE_TASK_SERVICE + '/tasks/api/v1/tasks/'
})

export const getTasks = () => taskApi.get('/')

export const getTask = (id) => taskApi.get(`/${id}`)

export const createTasks = (task) => taskApi.post('/', task)

export const deleteTasks = (id) => taskApi.delete(`/${id}`)

export const updateTasks = (id, task) => taskApi.put(`/${id}/`, task)