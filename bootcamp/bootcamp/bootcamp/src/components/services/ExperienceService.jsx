import axios from 'axios';

const EXPERIENCE_API_BASE_URL = 'http://localhost:8080/api/experiences';

class ExperienceService{

    getExperiences(){
        return axios.get(EXPERIENCE_API_BASE_URL);
    }
}

export default new ExperienceService();