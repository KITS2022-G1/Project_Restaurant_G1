import axios from "axios";

const ResTables_API_BASE_URL = "http://localhost:8080/api/resTables";

class ResTableServices{
    getAllResTables(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text="?restablesName="+stringSearch;
        }

        return axios.get(ResTables_API_BASE_URL+text);
    }

    addNewResTables(restables){
        return axios.post(ResTables_API_BASE_URL, restables);
    }

    getResTablesById(restables){
        return axios.get(ResTables_API_BASE_URL + '/' + restables);
    }

    updateResTables(restablesId, restables){
        return axios.put(ResTables_API_BASE_URL+ '/' + restablesId, restables);
    }

    deleteResTables(restables){
        return axios.delete(ResTables_API_BASE_URL + '/' + restables);
    }
}

export default new ResTableServices();