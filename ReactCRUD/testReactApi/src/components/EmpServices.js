import axios from "axios";

const EMP_API_BASE_URL = "http://localhost:8080/api/branches";

class EmpServices{
    getAllEmps(){
        return axios.get(EMP_API_BASE_URL);
    }

    addNewBranch(branch){
        return axios.post(EMP_API_BASE_URL, branch);
    }

    getBranchById(branch){
        return axios.get(EMP_API_BASE_URL + '/' + branch);
    }
}

export default new EmpServices();