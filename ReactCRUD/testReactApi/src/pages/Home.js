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
          <div class="carousel-item active" data-bs-interval="10000}" >
            <img
              src={anh1}
              class="d-block w-100"
              alt="..."
               style={{  maxHeight: "450px",objectPosition: "center", objectFit: "cover"}}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000" >
            <img
              src={anh2}
              class="d-block w-100"
              alt="..."
               style={{  maxHeight: "450px",objectPosition: "center", objectFit: "cover"}}
            />
          </div>
          <div class="carousel-item" >
            <img
              src={daubep}
              class="d-block w-100"
              alt="..."
               style={{  maxHeight: "450px",objectPosition: "center", objectFit: "cover"}}
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
                NLTDH RESTAURANT mong muốn trở thành không chỉ là một cơ sở ăn
                uống cao cấp hay một quầy bar phục vụ cocktail hiện đại. Nền
                tảng của chúng tôi được lấy cảm hứng từ chính nguồn cảm hứng. Đó
                là động lực để tìm kiếm vẻ đẹp bất cứ nơi nào nó có thể ẩn.
                Nhưng việc theo đuổi cái đẹp là hiểu được quá trình đằng sau nó.
                Hành trình từ con số không đến sự hoàn hảo. Và đó là những gì
                chúng tôi cố gắng đạt được ở đây.
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
            Có gì mới
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
              HỌP & SỰ KIỆN{" "}
            </p>
            <p
              style={{ fontSize: "24px", justifyContent: "left" }}
              className="text-center titleHome"
            >
              Ngoài không gian sang trọng để phù hợp với mọi cuộc tụ họp, nhóm
              của chúng tôi cung cấp một dịch vụ liền mạch từ đầu đến cuối. Với
              bí quyết giúp mọi cuộc họp hay sự kiện diễn ra thành công tốt đẹp.
              Cho dù đó là trong phòng khiêu vũ của chúng tôi hay tại một địa
              điểm bạn chọn, La Table Hanoia cung cấp dịch vụ lưu trữ và chiêu
              đãi cực kỳ sang trọng, nổi bật bởi ẩm thực mẫu mực, sự hỗ trợ của
chuyên gia và dịch vụ cá nhân hóa. Để có một kế hoạch tỉ mỉ và đảm
              bảo kết thúc thành công, chúng tôi ở đây vì bạn.
            </p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                type="button"
                class="btn btn-outline-warning"
                style={{ fontSize: "24px" }}
              >
                Xem tiếp
              </button>
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
              CƠ SỞ{" "}
            </p>
            <p
              style={{ fontSize: "24px", justifyContent: "left" }}
              className="text-center titleHome"
            >
              {" "}
              Phòng khiêu vũ 200m2 của chúng tôi được thiết kế để phù hợp với cả
              những sự kiện thanh lịch nhất. Bạn cũng sẽ thấy rằng nó được trang
              bị với công nghệ hiện đại, có thể đáp ứng bất kỳ nhu cầu nào của
              bạn. Nó cũng có thể được chia thành 2 hoặc 3 không gian nhỏ hơn,
              để phù hợp hơn với các chi tiết cụ thể của bạn. Một tùy chọn của
              Buffet đơn giản hoặc Menu Gourmet có sẵn một cách thuận tiện cho
              bạn.
            </p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                type="button"
                class="btn btn-outline-warning"
                style={{ fontSize: "24px" }}
              >
                Xem tiếp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;