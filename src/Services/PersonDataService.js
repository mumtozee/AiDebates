import axios from 'axios';

const MAIN_API_URL = "http://localhost:8080"

const api = axios.create({
  baseURL: MAIN_API_URL
});

class PersonDataService {
  retrievePerson(id) {
    return api.get(`/users/${id}`);
  }
}

export default new PersonDataService();
