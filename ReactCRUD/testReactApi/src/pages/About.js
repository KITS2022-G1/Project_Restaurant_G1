import React from "react";
import chicken from '../image/chicken.png'
import conca from '../image/conca.jpg'
import nhahang from '../image/nhahang.jpg'
import about from '../css/about.css';
const About = () => {
    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000}">
                        <img src={nhahang} class="d-block w-100" alt="..." style={{ maxHeight: "450px", objectFit: "cover"}} />
                    </div>
                </div>
            </div>

            <div class="container-fluid" style={{ height: 'auto' }}>
                <div className="row">
                    <div className="rounded float-right col-md-4">
                        <img src={chicken} alt=".." className='rounded mx-auto d-block mt-5 mb-5' style={{ width: "100%" }}></img>
                    </div>
                    <div class="col-ms-12 col-md-8">
                        <div class="container-fluid" style={{ paddingTop: "auto", margin: "auto" }}>
                            <p class="text-center mt-3 fs-1" style={{ color: "#3366FF" }}>NLTDH Restaurant</p>
                            <p class="text-start mt-5 fs-3 ">
                                mong muốn không chỉ là một cơ sở ăn uống cao cấp hay một quầy bar phục vụ cocktail hiện đại.
                                Nền tảng của chúng tôi được lấy cảm hứng từ chính nguồn cảm hứng. Đó là động lực để tìm kiếm vẻ đẹp bất cứ nơi nào nó có thể ẩn.
                                Nhưng việc theo đuổi cái đẹp là hiểu được quá trình đằng sau nó.
                                Hành trình từ con số không đến sự hoàn hảo.
                                Và đó là những gì chúng tôi cố gắng đạt được ở đây.
                                Đặt phía trên Hiệp hội Nhà báo nổi tiếng, nơi sinh sống của các nhà văn và nhà báo từ thời chiến tranh,
                                chúng tôi được thiết kế như một sự tôn vinh những sáng tạo tốt nhất bằng cử chỉ của bàn tay.
                                Tại La Table Hanoia, chúng tôi cố gắng mang đến những sáng tạo về vẻ đẹp.
                                Từ lựa chọn thực phẩm hảo hạng cho người sành ăn của chúng tôi đến thiết kế trang nhã của địa điểm.
                                Dịch vụ liền mạch với bầu không khí thanh lịch bình dị, chưa kể đến các loại cocktail độc đáo và từng đoạt giải thưởng của chúng tôi.
                                La Table Hanoia xin kính chào quý khách.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" style={{ backgroundColor: '#E3DBD7', height: 'auto' }}>
                <div className="row">
                    <div class="col-ms-12 col-md-8">
                        <div class="container-fluid" style={{ paddingTop: "auto", margin: "auto" }}>
                            <p class="text-center mt-3 fs-1" style={{ color: "#3366FF" }}>Về <br /> NLTDH Restaurant</p>
                            <p class="text-start mt-5 fs-4 ">
                                Nghệ thuật và thiết kế không thể sống mà không có thủ công.
                                NLTDH Restaurant dựa vào niềm đam mê của các thợ thủ công và
                                nhà thiết kế của mình để xây dựng biểu tượng đồ sơn mài của riêng mình.
                                NLTDH Restaurant được thành lập lần đầu tiên vào năm 1997 tại tỉnh Bình Dương, gần Sài Gòn,
                                trong làng sơn mài lịch sử từ thế kỷ 14.
                                Sau này ông Bùi Đức Thắng và ông Trần Duy Hưng đã cùng nhau phát triển nhà hàng để có được
                                nhưng thành tựu về kiến trúc văn hoá nghệ thuật trong thời kì đồ đá</p>
                        </div>
                    </div>
                    <div className="rounded float-right col-md-4">
                        <img src={conca} alt=".." className='mx-auto d-block mt-5 mb-5'
                            style={{
                                borderRadius: "50%",
                                border: "3px solid",
                                height: "60%",
                                width: "60%"
                            }}></img>
                    </div>
                </div>
            </div>

            <div className="container-fluid " style={{ background: "#CB9525" }}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <p className="text-center fs-2" style={{ color: "white", fontWeight: "bold" }}>NHÀ HÀNG CỦA CHÚNG TÔI</p>
                        <p className="text-center fs-5" style={{ color: "white", fontWeight: "bold" }}>Được điều hành bởi Bếp trưởng ĐÀO VĂN SƠN tài năng của chúng tôi,
                            cung cấp một thực đơn dành cho người sành ăn độc đáo, kết hợp tuyển chọn các loại rượu vang lên đến hơn 600 chai,
                            chắc chắn sẽ nâng tầm buổi tối của bất kỳ ai.
                            Cho dù không có người đi kèm hay đang hẹn hò, với bạn bè hay đồng nghiệp,
                            một người lạ hay tất cả những điều trên, La Table Hanoia luôn ở đây dành cho bạn.
                            Được trang bị vách ngăn phòng xung quanh các bàn lớn hơn và phòng VIP của chúng tôi,
                            tại đây bạn sẽ có thể tận hưởng tất cả sự sang trọng trong một khung cảnh thân mật.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid restaurant" style={{ background: "#CB9525CF", padding: "15px 0" }}>
                <div class="container-fluid row image-restaurant ">
                    <div className="col-md-4 col-sm-4 col-4 text-center">
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                        <br />
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-4 col-4 text-center">
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                        <br />
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-4 col-4 text-center">
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                        <br />
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid " style={{ background: "#2A606D" }}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <p className="text-center fs-2" style={{ color: "white", fontWeight: "bold" }}>Quầy cocktail của chúng tôi</p>
                        <p className="text-center fs-5" style={{ color: "white", fontWeight: "bold" }}>
                            Quầy bar phục vụ cocktail của chúng tôi,
                            một không gian đầy phong cách và lạc quan để bạn thưởng thức các loại cocktail độc đáo,
                            các món ăn nhẹ hảo hạng và đồ ăn nhẹ, để có hay chia sẻ,
                            chúng tôi sẽ để điều đó tùy thuộc vào bạn.
                            Tại đây, chúng tôi rất vui được làm việc với một số chuyên gia hòa âm sáng tạo nhất tại Việt Nam.
                            Bầu không khí đầy mời gọi và ấm cúng này, cùng với các nhân viên còn lại của chúng tôi,
                            tất cả đều làm việc cùng nhau để mang đến cho buổi tối của bạn điều kỳ diệu mà nó vô cùng xứng đáng.
                            Chào mừng</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid restaurant" style={{ background: "#4A9894", padding: "15px 0" }}>
                <div class="container-fluid row image-restaurant ">
                    <div className="col-md-4 col-sm-4 col-4 text-center">
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                        <br />
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-4 col-4 text-center">
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                        <br />
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-4 col-4 text-center">
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                        <br />
                        <div class="image-item" type-food="meat">
                            <img src={conca} alt=".." className='mx-auto rounded-circle' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;