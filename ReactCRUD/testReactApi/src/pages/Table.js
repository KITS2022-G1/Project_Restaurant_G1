import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodServices from "../services/FoodServices";
import ReactPaginate from "react-paginate";
import "../App.css";
import TodoService from "../services/TodoService";

function Table() {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [cartItems, setCardItems] = useState([]);

  useEffect(() => {
    FoodServices.getAllFoods(searchTerm).then((response) => {
      setFoods(response.data);
    });
  }, [searchTerm]);

  // add to cart ---------------------------------------------

  const itemsPrice = cartItems.reduce((a, c) => a + c.foodPrice * c.qty, 0);
  const taxPrice = itemsPrice * 0.04;
  const totalPrice = itemsPrice + taxPrice;

  const SaveData = () => {
    var rv = {};
    for (var i = 0; i < cartItems.length; ++i) {
      rv[i] = cartItems[i];
      TodoService.addNewTodo(rv[i]);
    }
    // TodoService.addNewTodo(rv);
  }

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.foodId === food.foodId);
    if (exist) {
      setCardItems(
        cartItems.map((x) =>
          x.foodId == food.foodId ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCardItems([...cartItems, { ...food, qty: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.foodId === food.foodId);
    if (exist.qty === 1) {
      setCardItems(cartItems.filter((x) => x.foodId !== food.foodId));
    } else {
      setCardItems(
        cartItems.map((x) =>
          x.foodId == food.foodId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // add to cart ---------------------------------------------

  //  sort------------------------------------------------------------------------------
  const sortPriceDown = () => {
    const sortData = [...foods];
    sortData.sort((a, b) => a.foodPrice - b.foodPrice);
    setFoods(sortData);
  };

  const sortPriceUp = () => {
    const sortData = [...foods];
    sortData.sort((a, b) => b.foodPrice - a.foodPrice);
    setFoods(sortData);
  };

  //  -------------------------------------------------------------------------------------------

  // paginate -----------------------------------------
  const foodPerPage = 6;
  const pagesVisited = pageNumber * foodPerPage;

  const pageCount = Math.ceil(foods.length / foodPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // paginate -----------------------------------------

  const clickView = () => {
    window.scrollTo(0, 0);
  };

  var listFoods = [];
  if (foods.length != 0) {
    listFoods = foods
      .slice(pagesVisited, pagesVisited + foodPerPage)
      .map((food) => (
        <div class="col-xl-3 col-md-4 mb-3 mt-3">
          <div
            class="card overflow-hidden shadow"
            style={{
              backgroundImage: `url(${food.foodImageURL})`,
              backgroundSize: "cover",
              width: "100%",
              height: "undefined",
              aspectRatio: "1 / 1",
              cursor: "pointer"
            }}
            onClick={() => onAdd(food)}
          >
            <div
              class="card-body image-food"
              style={{ background: "black", opacity: "0.6" }}
            >
              <div class="mt-5 text-center" style={{ fontSize: "14px" }}>
                <span>
                  <h4
                    class="fs-4"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  >
                    {food.foodName}
                  </h4>

                  <span
                    class="fw-medium"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  >
                    Hạn sử dụng: {food.foodDate}
                  </span>
                  <br />
                  <span
                    class="fw-medium"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  >
                    Mức Giá: {food.foodPrice.toLocaleString("en-US")}

                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ));
  } else {
    listFoods = (
      <tr>
        <th>NO food</th>
        <td></td>
      </tr>
    );
  }
  return (
    <>
      <section style={{ paddingTop: "1rem" }}></section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-8 col-sm-8 col-md-8 ">
            <h1 class="text-center">THỰC ĐƠN HÔM NAY</h1>

            <div className="row mt-2 ms-auto">

            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" onClick={() => setSearchTerm('an')} >Món bò</button>
              <button type="button" class="btn btn-secondary" onClick={() => setSearchTerm('haisan')}>Hải sản</button>
              <button type="button" class="btn btn-secondary" onClick={() => setSearchTerm('haisan')}>Lẩu</button>
              <button type="button" class="btn btn-secondary" onClick={() => setSearchTerm('tom')}>Tráng miệng</button>
              <button type="button" class="btn btn-secondary" onClick={() => setSearchTerm('uong')}>Đồ uống</button>
            </div>
            </div>



            <div className="row card-deck ">{listFoods}</div>
          </div>

          <div
            class="col-4 col-sm-4 col-md-4 border rounded-3 text-center border-dark"
            style={{ padding: "0", height: "445px", marginTop: '6.2rem' }}
          >
            <div
              className="border rounded-3"
              style={{ backgroundColor: "#fd7e14" }}
            >
              <h5
                className=" fs-1 mt-2"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Alumni Sans Collegiate One, sans-serif",
                }}
              >
                Những món đã chọn
              </h5>
              <Link to={"/favorite"}></Link>
            </div>
            <div className="border rounded-3 scrollbar">
              <div>
                {" "}
                {cartItems.length === 0 && (
                  <div className="mt-3"> Cart is Empty </div>
                )}{" "}
              </div>
              {cartItems.map((item) => (
                <div
                  key={item.foodId}
                  className="row container-fluid "
                  id="style-1"
                  style={{
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <div
                    className="col-5 col-md-5 mt-2 mb-2 text-start"
                    style={{
                      fontFamily: "Roboto Condensed, sans-serif",
                      // fontWeight: "bold"
                    }}
                  >
                    {" "}
                    {item.foodName}{" "}
                  </div>
                  <div className="col-3 col-md-3 mt-2 mb-2 text-end">
                    <button
                      onClick={() => onAdd(item)}
                      className="btn btn-primary add button-plus"
                      style={{
                        padding: "1px 8px",
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>
                    <button
                      onClick={() => onRemove(item)}
                      className="btn btn-danger remove button-minus"
                      style={{
                        marginLeft: "4px",
                        padding: "1px 8px",
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>{" "}
                  </div>
                  <div className="col-4 col-md-4 mt-2 mb-2 text-start">
                    <span
                      className=""
                      style={{
                        fontFamily: "Kanit, sans-serif",
                      }}
                    >
                      <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{item.foodPrice.toLocaleString("en-US")} vnđ{" "}</span> x <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{item.qty}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {cartItems.length !== 0 && (
              <div className="border rounded-3 mt-1" style={{ fontFamily: "Kanit, sans-serif" }}>
                <div className="row container-fluid mt-2" style={{ padding: "0", margin: "0", }}>
                  <div className="col-2 col-md-5 text-start"> Giá món</div>
                  <div className="col-1 col-md-3"></div>
                  <div className="col-8 col-md-4 text-start"> {itemsPrice.toLocaleString("en-US")} vnđ </div>
                </div>

                <div className="row container-fluid mt-2" style={{ padding: "0", margin: "0", }}>
                  <div className="col-5 col-md-5 text-start"> Giá thuế </div>
                  <div className="col-3 col-md-3"></div>
                  <div className="col-4 col-md-4 text-start" >
                    {" "}
                    {taxPrice.toLocaleString("en-US")} vnđ{" "}
                  </div>
                </div>

                <div className="row container-fluid mt-2" style={{ padding: "0", margin: "0", }}>
                  <hr style={{ fontWeight: 'bold', color: 'red' }}></hr>
                  <div className="col-5 col-md-5 text-start" style={{ fontWeight: 'bold' }}> Tổng </div>
                  <div className="col-3 col-md-3"></div>
                  <div className="col-4 col-md-4 text-start" style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'red' }}> {totalPrice.toLocaleString("en-US")} vnđ </div>
                </div>
              </div>
            )}

            <section style={{ paddingTop: "1rem" }}></section>
            <div>
              <Link to={"order/" + totalPrice}>
                <button className="btn btn-danger mb-3 button-math" onClick={() => SaveData()}>Xác nhận</button>
              </Link>
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
