import axios from "axios";

const ResTables_API_BASE_URL = "http://localhost:8080/api/todos";

class TodoService{
    getAllTodos(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text=stringSearch;
        }

        return axios.get(ResTables_API_BASE_URL+text);
    }

    addNewTodo(restables){
        return axios.post(ResTables_API_BASE_URL, restables);
    }

    deleteTodo(restables){
        return axios.delete(ResTables_API_BASE_URL + '/' + restables);
    }
}

export default new TodoService();