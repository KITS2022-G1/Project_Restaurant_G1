import axios from "axios";

const EMP_API_BASE_URL = "http://localhost:8080/api/ExportBills";

class ExportBillService{
    getAllExportBills(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text=stringSearch;
        }
        return axios.get(EMP_API_BASE_URL+text);
    }

    addNewExportBill(branch){
        return axios.post(EMP_API_BASE_URL, branch);
    }

    deleteExportBill(branch){
        return axios.delete(EMP_API_BASE_URL + '/' + branch);
    }
}

export default new ExportBillService();