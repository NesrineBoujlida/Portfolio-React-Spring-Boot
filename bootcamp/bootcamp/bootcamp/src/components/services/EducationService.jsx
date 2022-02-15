import axios from 'axios';

const EDUCATION_API_BASE_URL = 'http://localhost:8080/api/educations';

class EducationService{

    getEducations(){
        return axios.get(EDUCATION_API_BASE_URL);
    }
}

export default new EducationService();