import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/tasks';

export const fetchTasks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  };

  export const addTask = async (newTask) => {
    try {
      const response = await axios.post(`${BASE_URL}`,newTask);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  };
  

