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
        <div class="col-md-3 mb-3 mt-3">
          <div
            class="card overflow-hidden shadow"
            style={{
              backgroundImage: `url(${food.foodImageURL})`,
              backgroundSize: "cover",
              width: "90%",
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
                <div class="mt-5 text-center" style={{fontSize: "14px"}}>
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
      <section style={{ paddingTop: "3rem" }}></section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-8 col-sm-8 col-md-8 ">
            <h1 class="text-center">THỰC ĐƠN HÔM NAY</h1>
            <div className="row card-deck ">{listFoods}</div>
          </div>

          <div
            class="col-4 col-sm-4 col-md-4 mt-5 border rounded-3 text-center border-dark"
            style={{ padding: "0", height: "80%" }}
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
                      fontFamily: "Kanit, sans-serif",
                    }}
                  >
                    {" "}
                    {item.foodName}{" "}
                  </div>
                  <div className="col-3 col-md-3 mt-2 mb-2 text-end">
                    <button
                      onClick={() => onAdd(item)}
                      className="add button-plus"
                      style={{ backgroundColor: "white" }}
                    >
                      {" "}
                      +{" "}
                    </button>
                    <button
                      onClick={() => onRemove(item)}
                      className="remove button-minus"
                      style={{
                        marginLeft: "4px",
                        backgroundColor: "white",
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
                      {item.qty} x {item.foodPrice.toLocaleString("en-US")} vnđ{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {cartItems.length !== 0 && (
              <div className="border rounded-3 mt-1" style={{ fontFamily: "Kanit, sans-serif"}}>
                <div className="row container-fluid mt-2" style={{padding: "0", margin: "0",}}>
                  <div className="col-5 col-md-5 text-start"> Item Price </div>
                  <div className="col-3 col-md-3"></div>
                  <div className="col-4 col-md-4 text-start"> {itemsPrice.toLocaleString("en-US")} vnđ </div>
                </div>

                <div className="row container-fluid mt-2" style={{padding: "0", margin: "0",}}>
                  <div className="col-5 col-md-5 text-start"> Tax Price </div>
                  <div className="col-3 col-md-3"></div>
                  <div className="col-4 col-md-4 text-start" >
                    {" "}
                    {taxPrice.toLocaleString("en-US")} vnđ{" "}
                  </div>
                </div>

                <div className="row container-fluid mt-2" style={{padding: "0", margin: "0",}}>
                  <div className="col-5 col-md-5 text-start"> Total Price </div>
                  <div className="col-3 col-md-3"></div>
                  <div className="col-4 col-md-4 text-start"> {totalPrice.toLocaleString("en-US")} vnđ </div>
                </div>
              </div>
            )}

            <section style={{ paddingTop: "5rem" }}></section>
            <div>
              <Link to={"order/" + totalPrice}>
                <button className="mb-3 button-math"  style={{ backgroundColor: "white" }}>Xác nhận</button>
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
