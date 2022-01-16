import axios from 'axios';

const MAIN_API_URL = "http://localhost:8080"

const api = axios.create({
  baseURL: MAIN_API_URL
});

class ArgumentDataService {
  createTopic(argument) {
    return api.post("/add_argument", argument);
  }
}

export default new ArgumentDataService();
