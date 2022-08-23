import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import FoodServices from '../services/FoodServices';
import ReactPaginate from 'react-paginate';

function Table() {
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
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    const clickView = () => {
        window.scrollTo(0, 0);
      }
    var listFoods = [];
    if (foods.length != 0) {
        listFoods = foods.map((food) => (
            <div class="col-md-4 mb-4">
            <div class="card overflow-hidden shadow"> <div className='card-border bg-primary'><Link to={'/detail/' + food.foodId} > {/* <img class="card-img-top" src={item.anh} /> */}</Link></div>

              <div class="card-body py-4 px-3">

                <div class="d-flex align-items-center"><span class="fs-0"><Link to={'/detail/' + food.foodId} onClick={clickView}> <h4 class="fw-medium ten">{food.foodName}</h4></Link><span class="fs-0 fw-medium" style={{ color: 'black' }}>Hạn sử dụng: {food.foodDate}</span></span></div>

                <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Mức Giá: {food.foodPrice}</span></div>



                  <span className='tim' style={{ marginLeft: "7.5rem", }}>
                    <button
                      className="btn btn-outline-danger ms-2 rounded-circle"
                      >
                      <i class="fas fa-heart text-end"></i>
                    </button>
                  </span>
                </div>
</div>
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
                    <div class="col-8 col-sm-8 col-md-8 ">
                        <h1 class="text-center">THỰC ĐƠN HÔM NAY</h1>
                    <div className="row card-deck ">{listFoods}</div>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 border">
                        <div class='border'>
                            <h5>Những món đã chọn</h5>
                        <Link to={'/favorite'}></Link>
                        </div>
                        <section style={{ paddingTop: "5rem", }}></section>
                        <div>
                            <button >Xác nhận</button>
                        </div>
                    </div>
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