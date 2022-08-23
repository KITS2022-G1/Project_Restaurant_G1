import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodServices from "../services/FoodServices";
import ReactPaginate from "react-paginate";
import "../App.css";

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
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;

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

  // paginate -----------------------------------------
  const foodPerPage = 8;
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
        <div class="col-md-3 mb-3 mt-3" >
          <div
            class="card overflow-hidden shadow"
            style={{
              backgroundImage: `url(${food.foodImageURL})`,
              backgroundSize: "cover",
              width: "100%",
              height: "undefined",
              aspectRatio: "1 / 1",
              
            }}
          >
            <div
              class="card-body py-4 px-4 image-food"
              style={{ background: "black", opacity: "0.7" }}
            >
              <Link to={"/detail/" + food.foodId} className="nav-link">
                <div class="d-flex align-items-center">
                  <span>
                    <h4 class="fw-medium ten " style={{ color: "white" }}>
                      {food.foodName}
                    </h4>

                    <span class="fw-medium" style={{ color: "white" }}>
                      Hạn sử dụng: {food.foodDate}
                    </span>
                  </span>
                </div>

                <div class="d-flex align-items-center">
                  <span class="fw-medium" style={{ color: "white" }}>
                    Mức Giá: {food.foodPrice}
                  </span>
                </div>
              </Link>
              <span>
                <button
                  className="btn btn-outline-danger ms-2 rounded-circle"
                  onClick={() => onAdd(food)}
                >
                  Add to cart
                </button>
              </span>
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
      <section style={{ paddingTop: "7rem" }}></section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-7 col-sm-7 col-md-7 ">
            <h1 class="text-center">THỰC ĐƠN HÔM NAY</h1>
            <div className="row card-deck ">{listFoods}</div>
          </div>

          <div class="col-3 col-sm-3 col-md-3 border">
            <div class="border">
              <h5>Những món đã chọn</h5>
              <Link to={"/favorite"}></Link>
            </div>

            <div> {cartItems.length === 0 && <div> Cart is Empty </div>} </div>
            {cartItems.map((item) => (
              <div key={item.foodId} className="row">
                <div className="col-2"> {item.foodName} </div>
                <div className="col-2">
                  <button onClick={() => onAdd(item)} className="add">
                    {" "}
                    +{" "}
                  </button>
                  <button onClick={() => onRemove(item)} className="remove">
                    {" "}
                    -{" "}
                  </button>
                </div>
                <div className="col-2">
                  {" "}
                  {item.qty} x {item.foodPrice.toFixed(2)} vnđ{" "}
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row">
                  <div className="col-2"> Item Price </div>
                  <div className="col-1 text-right">
                    {" "}
                    {itemsPrice.toFixed(2)} vnđ{" "}
                  </div>
                </div>

                <div className="row">
                  <div className="col-2"> Tax Price </div>
                  <div className="col-1 text-right">
                    {" "}
                    {taxPrice.toFixed(2)} vnđ{" "}
                  </div>
                </div>

                <div className="row">
                  <div className="col-2"> Total Price </div>
                  <div className="col-1 text-right">
                    {" "}
                    {totalPrice.toFixed(2)} vnđ{" "}
                  </div>
                </div>
              </>
            )}

            <section style={{ paddingTop: "5rem" }}></section>
            <div>
              <Link to={"test/" + totalPrice}>
                <button>Xác nhận</button>
              </Link>
            </div>
          </div>
          <div class="col-1"></div>
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
