import React from "react";
import "../css/MainCourseMenu.css";

const MainCourseMenu = () => {
  return (
    <>
      <section style={{ padding: "3rem" }}>
        <div className="row text-menu">
          <div className="col-2"></div>
          <div className="text-center col-8">
            <p
              class="fs-1"
              style={{
                fontWeight: "bold",
                textDecoration: "underline #2A606D wavy",
              }}
            >
              Các món về bò
            </p>
            <ul class="leaders">
              <li className="fs-6 pt-2">
                <span>Bít tết bò</span>
                <span class="dots"></span>
                <span>420,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò hầm nấm kiểu Pháp</span>
                <span class="dots"></span>
                <span>300,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò sốt tiêu đen</span>
                <span class="dots"></span>
                <span>120,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò hầm rau củ</span>
                <span class="dots"></span>
                <span>180,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò carpaccio</span>
                <span class="dots"></span>
                <span>215,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Hamburger bò phô mai</span>
                <span class="dots"></span>
                <span>65,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò cuộn thập cẩm nướng</span>
                <span class="dots"></span>
                <span>80,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò lúc lắc</span>
                <span class="dots"></span>
                <span>100,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò hầm rượu vang</span>
                <span class="dots"></span>
                <span>210,000 vnđ</span>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </section>

      <section style={{ padding: "3rem" }}>
        <div className="row text-menu">
          <div className="col-2"></div>
          <div className="text-center col-8">
            <p
              class="fs-1"
              style={{
                fontWeight: "bold",
                textDecoration: "underline #2A606D wavy",
              }}
            >
              Các món về hải sản
            </p>
            <ul class="leaders">
              <li className="fs-6 pt-2">
                <span>Cá Hồi Nướng Soup Bí Đỏ Phủ Phô Mai</span>
                <span class="dots"></span>
                <span>420,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Súp nghêu</span>
                <span class="dots"></span>
                <span>300,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Tôm Áp Chảo Với Khoai Tím</span>
                <span class="dots"></span>
                <span>120,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò hầm rau củ</span>
                <span class="dots"></span>
                <span>180,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò carpaccio</span>
                <span class="dots"></span>
                <span>215,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Hamburger bò phô mai</span>
                <span class="dots"></span>
                <span>65,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò cuộn thập cẩm nướng</span>
                <span class="dots"></span>
                <span>80,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò lúc lắc</span>
                <span class="dots"></span>
                <span>100,000 vnđ</span>
              </li>
              <li className="fs-6 pt-2">
                <span>Bò hầm rượu vang</span>
                <span class="dots"></span>
                <span>210,000 vnđ</span>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </section>

      <section style={{ padding: "3rem" }}>
        <p
          className="fs-2 text-center"
          style={{ fontFamily: "Dancing Script, cursive", fontWeight: "bold" }}
        >
          CHÚC QUÝ KHÁCH NGON MIỆNG!
        </p>
      </section>
    </>
  );
};
export default MainCourseMenu;
