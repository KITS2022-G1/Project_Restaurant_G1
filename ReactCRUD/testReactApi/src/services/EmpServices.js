import axios from "axios";

const EMP_API_BASE_URL = "http://localhost:8080/api/branches";

class EmpServices{
    getAllBranches(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text="?branchName="+stringSearch;
        }

        return axios.get(EMP_API_BASE_URL+text);
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

    deleteBranch(branch){
        return axios.delete(EMP_API_BASE_URL + '/' + branch);
    }

    getBranchIdBiggerAvg(){
        return axios.get(EMP_API_BASE_URL+"/getIdBigger");
    }

    getIdBiggerAvg(){
        return axios.get(EMP_API_BASE_URL+"/getIdBiggerAvg");
    }
}

export default new EmpServices();