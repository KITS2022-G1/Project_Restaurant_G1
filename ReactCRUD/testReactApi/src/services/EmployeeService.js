import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService{
    getAllEmployees(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text="?employeeName="+stringSearch;
        }

        return axios.get(EMPLOYEE_API_BASE_URL+text);
    }

    addNewEmployee(Employee){
        return axios.post(EMPLOYEE_API_BASE_URL, Employee);
    }

    getEmployeeById(Employee){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + Employee);
    }

    updateEmployee(EmployeeId, Employee){
        return axios.put(EMPLOYEE_API_BASE_URL+ '/' + EmployeeId, Employee);
    }

    deleteEmployee(Employee){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + Employee);
    }
}

export default new EmployeeService();