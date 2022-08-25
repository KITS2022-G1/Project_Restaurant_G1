import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import TodoService from '../services/TodoService';

function ChefFoodManager() {

    const [foodList, setFoodList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        TodoService.getAllTodos(searchTerm).then((response) => {
            setFoodList(response.data);
        });
        console.log(foodList);
    }, [searchTerm]);

    const branchPerPage = 5;
    const pagesVisited = pageNumber * branchPerPage;

    const pageCount = Math.ceil(foodList.length / branchPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    const deleteFoodList = (id) => {
        if (window.confirm('Are you sure?') === true) {
            TodoService.deleteTodo(id).then((response) => {
                setFoodList(response.data);
            })
        }
        else {

        }
    }

    var listOrder = [];
    if (foodList.length !== 0) {
        listOrder = foodList.slice(pagesVisited, pagesVisited + branchPerPage).map((food) => (
            <tr>
                <td>{food.foodName}</td>
                <td>{food.qty}</td>
                <td>{food.foodDate}</td>
                <td>
                    <button
                        className="btn btn-danger" onClick={() => deleteFoodList(food.todoId)}
                    >
                        Done
                    </button>
                </td>
            </tr>
        ));
    }
    else {
        listOrder = <tr><th>NO CURRENT BILL</th><td></td></tr>;
    }

    const onClickEnter=(event)=>{
        if(event.key==='Enter'){
            setSearchTerm(document.querySelectorAll('input[name=inputSearch]')[0].value);
        }
    }

    return (
        <div className="container">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    name="inputSearch"
                    onKeyDown={onClickEnter}
                ></input>
                <div className="input-group-append">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={()=>setSearchTerm(document.querySelectorAll('input[name=inputSearch]')[0].value)}

                    >
                        SEARCH
                    </button>
                </div>
            </div>
            <div>
                <Link to={`/add`}><button className='btn btn-success'> Add </button></Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tên món</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Done</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {listOrder}
                </tbody>
            </table>

            <div>
                <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
        </div>
    );

}

export default ChefFoodManager;