import React from "react";
import Meeting from '../image/Meeting.jpg'
import nhahang from '../image/nhahang.jpg'
import Banqueting from '../image/Banqueting.jpg'
import sanhchinh from '../image/sanhchinh.png'
import trungbay from '../image/trungbay.png'
import banhkem from '../image/banhkem.jpg'
import '../css/Services.css'

const Services = () => {
    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000}">
                        <img src={nhahang} class="d-block w-100" alt="..." style={{ maxHeight: "450px", objectFit: "cover" }} />
                    </div>
                </div>
            </div>

            <div className="container-fluid row text-sercices" style={{ padding: "0", margin: "0" }}>
                <div className="col-md-6 col-ms-6" style={{ padding: "0" }}>
                    <img src={Meeting} style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                </div>
                <div className="col-ms-6 col-md-6 " style={{ padding: "0", backgroundColor: "red" }}>
                    <p style={{ fontWeight: "bold", color: "white" }} className="text-center mt-3 mb-3 fs-2 "> HỌP & SỰ KIỆN </p>
                    <p style={{ justifyContent: "left", color: "white", padding: "0 4px" }} className="text-left fs-3 mt-3 mb-3 ">
                        Ngoài không gian sang trọng để phù hợp với mọi cuộc tụ họp,
                        nhóm của chúng tôi cung cấp một dịch vụ liền mạch từ đầu đến cuối.
                        Với bí quyết giúp mọi cuộc họp hay sự kiện diễn ra thành công tốt đẹp.
                        Cho dù đó là trong phòng khiêu vũ của chúng tôi hay tại một địa điểm bạn chọn,
                        La Table Hanoia cung cấp dịch vụ lưu trữ và chiêu đãi cực kỳ sang trọng,
                        nổi bật bởi ẩm thực mẫu mực, sự hỗ trợ của chuyên gia và dịch vụ cá nhân hóa.
                        Để có một kế hoạch tỉ mỉ và đảm bảo kết thúc thành công, chúng tôi ở đây vì bạn.
                    </p>
                </div>
            </div>

            <div className="container-fluid row text-sercices" style={{ padding: "0", margin: "0" }}>
                <div className="col-ms-6 col-md-6 " style={{ padding: "0", backgroundColor: "#18807D" }}>
                    <p style={{ fontWeight: "bold", color: "white" }} className="text-center mt-5 mb-3 fs-2 "> CƠ SỞ </p>
                    <p style={{ justifyContent: "left", color: "white", padding: "0 4px" }} className="text-left fs-3 mt-3 mb-3 ">
                        Phòng khiêu vũ 200m2 của chúng tôi được thiết kế để phù hợp với cả những sự kiện thanh lịch nhất.
                        Bạn cũng sẽ thấy rằng nó được trang bị với công nghệ hiện đại, có thể đáp ứng bất kỳ nhu cầu nào của bạn.
                        Nó cũng có thể được chia thành 2 hoặc 3 không gian nhỏ hơn, để phù hợp hơn với các chi tiết cụ thể của bạn.
                        Một tùy chọn của Buffet đơn giản hoặc Menu Gourmet có sẵn một cách thuận tiện cho bạn.
                    </p>
                </div>
                <div className="col-md-6 col-ms-6" style={{ padding: "0" }}>
                    <img src={Banqueting} style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                </div>
            </div>

            <div className="container-fluid row text-sercices" style={{ padding: "0", margin: "0" }}>
                <div className="col-md-6 col-ms-6" style={{ padding: "0" }}>
                    <img src={sanhchinh} style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                </div>
                <div className="col-md-6 col-ms-6" style={{ padding: "0" }}>
                    <img src={trungbay} style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                </div>
            </div>

            <div className="container-fluid row text-sercices" style={{ padding: "0", margin: "0" }}>
                <div className="col-md-6 col-ms-6" style={{ padding: "0" }}>
                    <img src={banhkem} style={{ width: "100%", height: "100%", objectFit: "contain " }}></img>
                </div>
                <div className="col-ms-6 col-md-6 " style={{ padding: "0", backgroundColor: "#2E8B57" }}>
                    <p style={{ fontWeight: "bold", color: "white" }} className="text-center mt-4 mb-3 fs-1 "> BƯU KIỆN </p>
                    <p style={{ justifyContent: "left", color: "white", padding: "0 4px" }} className="text-left fs-2 mt-4 mb-3 ">
                        NLTDH RESTAURANT cung cấp cho bạn cơ hội để đơn giản hóa kế hoạch của bạn,
                        bằng cách sử dụng một trong những gói được sắp xếp chuyên nghiệp của chúng tôi cho các cuộc họp trong khu vực Hà Nội.
                        Chúng tôi cũng sẵn lòng điều chỉnh các dịch vụ của mình cho phù hợp với bất kỳ chi tiết cụ thể nào mà cuộc họp của bạn có thể yêu cầu.
                    </p>
                </div>
            </div>
        </>
    );
};
export default Services;
