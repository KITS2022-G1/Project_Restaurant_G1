import axios from "axios";

const Food_API_BASE_URL = "http://localhost:8080/api/foods";

class FoodServices{
    getAllFoods(stringSearch){
        var text = "";
        if(stringSearch!==""){
            text="?foodName="+stringSearch;
        }

        return axios.get(Food_API_BASE_URL+text);
    }

    addNewFood(food){
        return axios.post(Food_API_BASE_URL, food);
    }

    getFoodById(food){
        return axios.get(Food_API_BASE_URL + '/' + food);
    }

    updateFood(foodId, food){
        return axios.put(Food_API_BASE_URL+ '/' + foodId, food);
    }

    deleteFood(food){
        return axios.delete(Food_API_BASE_URL + '/' + food);
    }
}

export default new FoodServices();