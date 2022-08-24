import axios from "axios";

const BILL_API_BASE_URL = "http://localhost:8080/api/bills";

class BillService{
    getAllBills(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text="?billTitle="+stringSearch;
        }

        return axios.get(BILL_API_BASE_URL+text);
    }

    addNewBill(bill){
        return axios.post(BILL_API_BASE_URL, bill);
    }

    getBillById(bill){
        return axios.get(BILL_API_BASE_URL + '/' + bill);
    }

    updateBill(billId, bill){
        return axios.put(BILL_API_BASE_URL+ '/' + billId, bill);
    }

    deleteBill(bill){
        return axios.delete(BILL_API_BASE_URL + '/' + bill);
    }
}

export default new BillService();