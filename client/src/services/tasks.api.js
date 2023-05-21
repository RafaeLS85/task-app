import axios from 'axios';
import { VITE_TASK_SERVICE } from '../constants/environment';


export const getTasks = () => {

    return axios.get(VITE_TASK_SERVICE + '/tasks/api/v1/tasks/')
}

