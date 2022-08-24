import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:8080/api/customers";

class CustomerService{
    getAllCustomers(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text="?customerName="+stringSearch;
        }

        return axios.get(Customer_API_BASE_URL+text);
    }

    addNewCustomer(Customer){
        return axios.post(Customer_API_BASE_URL, Customer);
    }

    getCustomerById(Customer){
        return axios.get(Customer_API_BASE_URL + '/' + Customer);
    }

    updateCustomer(CustomerId, Customer){
        return axios.put(Customer_API_BASE_URL+ '/' + CustomerId, Customer);
    }

    deleteCustomer(Customer){
        return axios.delete(Customer_API_BASE_URL + '/' + Customer);
    }
}

export default new CustomerService();