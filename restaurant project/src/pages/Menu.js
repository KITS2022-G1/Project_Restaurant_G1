import React from "react";
import anhdoan from '../image/anhdoan.jpg'
import conga from '../image/conga.png'
import banan from '../image/banan.jpg'
import trangmieng from '../image/trangmieng.jpg'
import douong from '../image/douong.jpg'
import monphu from '../image/monphu.png'
import bachtuoc from '../image/bachtuoc.png'
import convit from '../image/convit.png'
import {Link} from 'react-router-dom'
import bannerMenu from '../image/bannerMenu.jpg'
import '../css/Menu.css'
const Menu = () => {
    const clickView = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000}">
                        <img src={bannerMenu} class="d-block w-100" alt="..." style={{ width: "100%", objectFit: "contain"}} />
                    </div>
                </div>
            </div>


            <div className="container-fluid" >
                <div className="row image-0">
                    <div className="col-md-6 col-sm-6">
                        <div className="row image-1" style={{backgrond: "#E3DBD7"}}>
                            <div className="col-6 col-md-6 col-ms-3 chicken">
                                <img src = {conga} style ={{width: "90%"}} className = "mt-5 mb-3 float-start"></img>
                            </div>
                            <div className="col-8 col-md-6 col-sm-6">
                                <p className="mt-5 mb-3 fs-5 title" > Đầu bếp trưởng của chúng tôi đã đưa ra một thực đơn lập sẵn với một số tùy chọn để bạn lựa chọn. 
                                Đây là sự kết hợp của các món ăn kết hợp hoàn hảo với nhau và sẽ không làm bạn thất vọng. 
                                Đối với những người thích phiêu lưu ngoài kia, đây là lựa chọn dành cho bạn.</p>
                                <div className="text-center">
                               <Link to="/MainCourseMenu" onClick={clickView}><button type="button" class="btn btn-lg btn-outline-success mb-3" style={{borderRadius: "50%", fontWeight: "bold"}}>Menu món chính</button></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 image-2" style={{padding:"0"}}>
                        <img src={banan} style={{width:"100%", height:"100%",objectFit:"contain"}}></img>
                    </div>
                </div>
            </div>

            <div className="container-fluid" >
                <div className="row image-0">
                    <div className="col-md-6 image-2" style={{padding:"0"}}>
                        <img src={monphu} style={{width:"100%", height:"100%",objectFit:"contain"}}></img>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="row image-1" style={{backgrond: "#E3DBD7"}}>
                            <div className="col-6 col-md-6 col-ms-3 chicken">
                                <img src = {bachtuoc} style ={{width: "90%"}} className = "mt-5 mb-3 float-start"></img>
                            </div>
                            <div className="col-8 col-md-6 col-sm-6">
                                <p className="mt-5 mb-3 fs-5 title" > Bếp trưởng Nguyễn Tiến Dũng của chúng tôi đã có hơn 20 năm kinh nghiệm làm việc trong thế giới ẩm thực cao cấp của Pháp, 
                                 làm việc tại các khách sạn như Sofitel Metropole Hanoi và Sofitel Plaza Saigon.
                                 Anh ấy đã có cơ hội hợp tác với nhiều đầu bếp sao Michelin, những người mà anh ấy có được kiến ​​thức sâu sắc và chuyên môn tinh tế.</p>
                                <div className="text-center">
                                <Link to="/SideDishMenu" onClick={clickView}><button type="button" class="btn btn-lg btn-outline-success mb-3" style={{borderRadius: "50%", fontWeight: "bold"}}>Menu món phụ</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" >
                <div className="row image-0">
                    <div className="col-md-6 col-sm-6">
                        <div className="row image-1" style={{backgrond: "#E3DBD7"}}>
                            <div className="col-6 col-md-6 col-ms-3 chicken">
                                <img src = {conga} style ={{width: "90%"}} className = "mt-5 mb-3 float-start"></img>
                            </div>
                            <div className="col-8 col-md-6 col-sm-6">
                                <p className="mt-5 mb-3 fs-5 title" > Bạn đã đến đúng nơi nếu bạn đang tìm kiếm một thứ gì đó mới mẻ, đơn giản nhưng lành mạnh.
                                 Món tapas của chúng tôi là để thưởng thức cùng đồ uống sau một ngày làm việc, hoặc bạn có thể thử các lựa chọn chia sẻ của chúng tôi cho cả bàn thưởng thức. 
                                 Và bạn sẽ không tìm thấy bất kỳ loại bánh mì kẹp thịt nào giống như cái này, chỉ cần thử bánh mì kẹp thịt ốc của chúng tôi nếu bạn không tin chúng tôi.
                                 Đầu bếp của chúng tôi đã lấy cảm hứng từ khắp nơi trên thế giới và từ quê hương Việt Nam, để tạo ra những món ăn tuyệt vời đầy màu sắc và độc đáo này, cho tất cả các bạn trải nghiệm.</p>
                                <div className="text-center">
                                <Link to="/DessertMenu" onClick={clickView}><button type="button" class="btn btn-lg btn-outline-success mb-3" style={{borderRadius: "50%", fontWeight: "bold"}}>menu tráng miệng</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 image-2" style={{padding:"0"}}>
                        <img src={trangmieng} style={{width:"100%", height:"100%",objectFit:"contain"}}></img>
                    </div>
                </div>
            </div>

            <div className="container-fluid" >
                <div className="row image-0">
                    <div className="col-md-6 image-2" style={{padding:"0"}}>
                        <img src={douong} style={{width:"100%", height:"100%",objectFit:"contain"}}></img>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="row image-1" style={{backgrond: "#E3DBD7"}}>
                            <div className="col-6 col-md-6 col-ms-3 chicken">
                                <img src = {convit} style ={{width: "90%"}} className = "mt-5 mb-3 float-start"></img>
                            </div>
                            <div className="col-8 col-md-6 col-sm-6">
                                <p className="mt-5 mb-3 fs-5 title" >Tại đây bạn sẽ tìm thấy danh sách đồ uống mà chúng tôi cung cấp. 
                                Từ các loại cocktail độc đáo và thanh lịch đến các loại cà phê và sinh tố bổ sung năng lượng. 
                                Được thiết kế để nâng tầm, mọi thứ ở đây đều được tạo ra với những nguyên liệu tươi ngon nhất và với sự chăm sóc tỉ mỉ nhất.</p>
                                <div className="text-center">
                                <Link to="/DrinkMenu" onClick={clickView}><button type="button" class="btn btn-lg btn-outline-success mb-3" style={{borderRadius: "50%", fontWeight: "bold"}}>menu đồ uống</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Menu;