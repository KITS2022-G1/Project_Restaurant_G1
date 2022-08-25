import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import FoodServices from '../services/FoodServices';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';



const Chef = () => {
    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        FoodServices.getAllFoods(searchTerm).then((response) => {
            setFoods(response.data);
        });
    }, [searchTerm]);

    const foodPerPage = 5;
    const pagesVisited = pageNumber * foodPerPage;

    const pageCount = Math.ceil(foods.length / foodPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    const deleteFood = (id) => {
        if (window.confirm('Are you sure?') == true) {
            FoodServices.deleteFood(id).then((response) => {
                setFoods(response.data);
            })
        }
        else {

        }
    }

    var listFoods = [];
    if (foods.length != 0) {
        listFoods = foods.slice(pagesVisited, pagesVisited + foodPerPage).map((food) => (
            <tr key={food.foodId}>
                <th scope="row">{food.foodId}</th>
                <td>{food.foodName}</td>
                <td>{food.foodPrice}</td>
                <td>{food.foodDate}</td>
                
                <td>
                    <Link to={`/edit/` + food.foodId}><button className='btn btn-info'>Edit</button></Link>
                </td>
                <td>
                    <button
                        className="btn btn-danger" onClick={() => deleteFood(food.foodId)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }
    else {
        listFoods = <tr><th>NO FOOD</th><td></td></tr>;
    }

    const onClickEnter=(event)=>{
        if(event.key=='Enter'){
            setSearchTerm(document.querySelectorAll('input[name=inputSearch]')[0].value);
        }
    }

    return (
        <div className="container">
            <div class="row">
                <div class="col-8">
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
                <Link to={`/addFood`}><button className='btn btn-success'>Thêm món mới </button></Link>
            </div>
            {/* <div>
                <Link to={`/delete`}><button className='btn btn-success'> Id Bigger </button></Link>
            </div> */}

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Tên món</th>
                        <th scope="col">Giá tiền</th>
                        <th scope="col">Hạn sử dụng</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {listFoods}
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
                <div class="col-4 border">
                    <div className="row" style={{marginTop: "10"}}>
                        <div className="col-3">
                        <button className="btn">bàn 1</button>
                        </div>
                        <div className="col-3">
                        <button className="btn">bàn 1</button>
                        </div>
                        <div className="col-3">
                        <button className="btn">bàn 1</button>
                        </div>
                        <div className="col-3">
                        <button className="btn">bàn 1</button>
                        </div>
                    </div>

                </div>
        </div>
        </div>

    );

}
export default Chef;