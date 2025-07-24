// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust to your backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Quiz-specific API calls
export const quizAPI = {
  getQuizzesByCourse: (courseId) => api.get(`/courses/${courseId}/quizzes`),
  getQuiz: (quizId) => api.get(`/quizzes/${quizId}`),
  submitQuiz: (quizId, answers) => api.post(`/quizzes/${quizId}/submit`, { answers })
};

export default api;