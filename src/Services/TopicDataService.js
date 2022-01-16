import axios from 'axios';

const MAIN_API_URL = "http://localhost:8080"

const api = axios.create({
  baseURL: MAIN_API_URL
});

class TopicDataService {
  retrieveAllTopics() {
    return api.get("/all_topics");
  }

  retrieveTopic(id) {
    return api.get(`/topics/${id}`);
  }

  deleteTopic(id) {
    return api.delete(`/delete_topic/${id}`);
  }

  createTopic(topic) {
    return api.post("/add_topic", topic);
  }

  retrieveAllForArguments(id) {
    return api.get(`/for_args/${id}`);
  }

  retrieveAllAgainstArguments(id) {
    return api.get(`/against_args/${id}`);
  }

  retrieveAllTopicsByUser(user_id) {
    return api.get(`/user_topics/${user_id}`);
  }
}

export default new TopicDataService();
