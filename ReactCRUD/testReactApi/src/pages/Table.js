import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import FoodServices from '../services/FoodServices';
import ReactPaginate from 'react-paginate';
import "../App.css";

function Table() {
    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        FoodServices.getAllFoods(searchTerm).then((response) => {
            setFoods(response.data);
        });
    }, [searchTerm]);

    const foodPerPage = 8;
    const pagesVisited = pageNumber * foodPerPage;

    const pageCount = Math.ceil(foods.length / foodPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    const clickView = () => {
        window.scrollTo(0, 0);
    }
    var listFoods = [];
    if (foods.length != 0) {
        listFoods = foods.slice(pagesVisited, pagesVisited + foodPerPage).map((food) => (
            <div class="col-md-3 mb-3">
                <Link to={'/detail/' + food.foodId} className='nav-link'>
                    <div class="card overflow-hidden shadow"
                        style={{
                            backgroundImage: `url(${food.foodImageURL})`,
                            backgroundSize: 'cover',


                        }}>



                        <div class="card-body py-4 px-4  " style={{ backgroundColor: 'black', opacity: '50%', height: '250px', width: '300px' }}>

                            <div class="d-flex align-items-center"><span class="fs-0">
                              
                                <h4 class="fw-medium ten " style={{ color: 'white' }}>{food.foodName}</h4>
                                

                                <span class="fs-0 fw-medium" style={{ color: 'white' }}>Hạn sử dụng: {food.foodDate}</span></span></div>

                            <div class="d-flex align-items-center"><span class="fs-0 fw-medium" style={{ color: 'white' }}>Mức Giá: {food.foodPrice}</span></div>

                            <span className='tim' style={{ marginLeft: "7.5rem", }}>
                                <button
                                    className="btn btn-outline-danger ms-2 rounded-circle"
                                >
                                    <i class="fas fa-heart text-end"> V</i>
                                </button>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>


        ));
    }
    else {
        listFoods = <tr><th>NO food</th><td></td></tr>;
    }
    return (
        <>
            <section style={{ paddingTop: "7rem", }}></section>
            <div class='container-fluid'>
                <div class="row">
                    <div class='col-1'></div>
                    <div class="col-7 col-sm-7 col-md-7 ">
                        <h1 class="text-center">THỰC ĐƠN HÔM NAY</h1>
                        <div className="row card-deck ">{listFoods}</div>
                    </div>

                    <div class="col-3 col-sm-3 col-md-3 border">
                        <div class='border'>
                            <h5>Những món đã chọn</h5>
                            <Link to={'/favorite'}></Link>
                        </div>
                        <section style={{ paddingTop: "5rem", }}></section>
                        <div>
                            <button >Xác nhận</button>
                        </div>
                    </div>
                    <div class='col-1'></div>
                </div>
            </div>
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
        </>
    );
}
export default Table;