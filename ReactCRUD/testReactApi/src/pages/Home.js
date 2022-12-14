import React from "react";
import anh1 from "../image/anh1.jpg";
import anh2 from "../image/anh2.jpg";
import daubep from "../image/daubep.jpg";
import chicken from "../image/chicken.png";
import Banqueting from "../image/Banqueting.jpg";
import Meeting from "../image/Meeting.jpg";
import home from "../css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>  
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000}">
            <img
              src={anh1}
              class="d-block w-100"
              alt="..."
              style={{
                maxHeight: "450px",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={anh2}
              class="d-block w-100"
              alt="..."
              style={{
                maxHeight: "450px",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={daubep}
              class="d-block w-100"
              alt="..."
              style={{
                maxHeight: "450px",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div
        class="container-fluid"
        style={{ backgroundColor: "#E3DBD7", height: "auto" }}
      >
        <div className="row">
          <div className="rounded float-right col-md-4">
            <img
              src={chicken}
              alt=".."
              className="rounded mx-auto d-block mt-5 mb-5"
              style={{ width: "100%" }}
            ></img>
          </div>
          <div class="col-ms-12 col-md-8">
            <div
              class="container-fluid"
              style={{ paddingTop: "auto", margin: "auto" }}
            >
              <p class="text-start mt-5 fs-3 ">
                NLTDH RESTAURANT mong mu???n tr??? th??nh kh??ng ch??? l?? m???t c?? s??? ??n
                u???ng cao c???p hay m???t qu???y bar ph???c v??? cocktail hi???n ?????i. N???n
                t???ng c???a ch??ng t??i ???????c l???y c???m h???ng t??? ch??nh ngu???n c???m h???ng. ????
                l?? ?????ng l???c ????? t??m ki???m v??? ?????p b???t c??? n??i n??o n?? c?? th??? ???n.
                Nh??ng vi???c theo ??u???i c??i ?????p l?? hi???u ???????c qu?? tr??nh ?????ng sau n??.
                H??nh tr??nh t??? con s??? kh??ng ?????n s??? ho??n h???o. V?? ???? l?? nh???ng g??
                ch??ng t??i c??? g???ng ?????t ???????c ??? ????y.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid"
        style={{ backgroundColor: "#fff", height: "auto" }}
      >
        <section style={{ paddingTop: "7rem" }} />
        <font style={{ verticalAlign: "inherit" }}>
          <p
            style={{
              color: "#2A606D",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "32px",
            }}
          >
            C?? g?? m???i
          </p>
        </font>
        <div className="row mb-3">
          <div className="col-md-6">
            <div class="container">
              <img
                src={Meeting}
                className="rounded-circle rounded mx-auto d-block p-5 img-fluid"
                style={{
                  width: "60%",
                  height: undefined,
                  aspectRatio: 1 / 1,
                  objectFit: "cover",
                }}
              ></img>
            </div>
            <p
              style={{ fontWeight: "bold", fontSize: "32px" }}
              className="text-center "
            >
              {" "}
              H???P & S??? KI???N{" "}
            </p>
            <p
              style={{ fontSize: "24px", justifyContent: "left" }}
              className="text-center titleHome"
            >
              Ngo??i kh??ng gian sang tr???ng ????? ph?? h???p v???i m???i cu???c t??? h???p, nh??m
              c???a ch??ng t??i cung c???p m???t d???ch v??? li???n m???ch t??? ?????u ?????n cu???i. V???i
              b?? quy???t gi??p m???i cu???c h???p hay s??? ki???n di???n ra th??nh c??ng t???t ?????p.
              Cho d?? ???? l?? trong ph??ng khi??u v?? c???a ch??ng t??i hay t???i m???t ?????a
              ??i???m b???n ch???n, La Table Hanoia cung c???p d???ch v??? l??u tr??? v?? chi??u
              ????i c???c k??? sang tr???ng, n???i b???t b???i ???m th???c m???u m???c, s??? h??? tr??? c???a
              chuy??n gia v?? d???ch v??? c?? nh??n h??a. ????? c?? m???t k??? ho???ch t??? m??? v?? ?????m
              b???o k???t th??c th??nh c??ng, ch??ng t??i ??? ????y v?? b???n.
            </p>
            <div class="d-grid gap-2 col-6 mx-auto">
            <Link to = "/Services" className="nav-link text-center">
              <button
                type="button"
                class="btn btn-outline-warning"
                style={{ fontSize: "24px" }}
              >
              Xem ti???p
              </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div class="container">
              <img
                src={Banqueting}
                className="rounded-circle rounded mx-auto d-block p-5 img-fluid"
                style={{
                  width: "60%",
                  height: undefined,
                  aspectRatio: 1 / 1,
                  objectFit: "cover",
                }}
              ></img>
            </div>
            <p
              style={{ fontWeight: "bold", fontSize: "32px" }}
              className="text-center "
            >
              {" "}
              C?? S???{" "}
            </p>
            <p
              style={{ fontSize: "24px", justifyContent: "left" }}
              className="text-center titleHome"
            >
              {" "}
              Ph??ng khi??u v?? 200m2 c???a ch??ng t??i ???????c thi???t k??? ????? ph?? h???p v???i c???
              nh???ng s??? ki???n thanh l???ch nh???t. B???n c??ng s??? th???y r???ng n?? ???????c trang
              b??? v???i c??ng ngh??? hi???n ?????i, c?? th??? ????p ???ng b???t k??? nhu c???u n??o c???a
              b???n. N?? c??ng c?? th??? ???????c chia th??nh 2 ho???c 3 kh??ng gian nh??? h??n,
              ????? ph?? h???p h??n v???i c??c chi ti???t c??? th??? c???a b???n. M???t t??y ch???n c???a
              Buffet ????n gi???n ho???c Menu Gourmet c?? s???n m???t c??ch thu???n ti???n cho
              b???n.
            </p>
            <div class="d-grid gap-2 col-6 mx-auto">
            <Link to = "/Services" className="nav-link text-center">
              <button
                type="button"
                class="btn btn-outline-warning"
                style={{ fontSize: "24px" }}
              >
               Xem ti???p
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
