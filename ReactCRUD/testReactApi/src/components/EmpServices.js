import axios from "axios";

const EMP_API_BASE_URL = "http://localhost:8080/api/branches";

class EmpServices{
    getAllBranches(){
        return axios.get(EMP_API_BASE_URL);
    }

    addNewBranch(branch){
        return axios.post(EMP_API_BASE_URL, branch);
    }

    getBranchById(branch){
        return axios.get(EMP_API_BASE_URL + '/' + branch);
    }

    updateBranch(branchId, branch){
        return axios.put(EMP_API_BASE_URL+ '/' + branchId, branch);
    }
}

export default new EmpServices();