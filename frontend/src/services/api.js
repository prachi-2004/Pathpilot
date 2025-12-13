import axios from "axios";

// Vite environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Quiz-specific API calls
export const quizAPI = {
  getQuizzesByCourse: (courseId) =>
    api.get(`/courses/${courseId}/quizzes`),

  getQuiz: (quizId) =>
    api.get(`/quizzes/${quizId}`),

  submitQuiz: (quizId, answers) =>
    api.post(`/quizzes/${quizId}/submit`, { answers }),
};

export default api;
