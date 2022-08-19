import React from "react";
import '../css/MainCourseMenu.css'
const MainCourseMenu = () => {
    return (
        <>
            <section style={{ padding: "3rem" }}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="text-center col-8">
                        <p class="fs-1">Các mòn về bò</p>
                        <ul class="leaders">
                            <li className="fs-4">   
                                <span>Bít tết bò (ba chỉ)</span>
                                <span class="dots"></span>
                                <span>420,000 vnđ</span>
                            </li>
                            <li className="fs-4">   
                                <span>Bò hầm nấp kiểu Pháp</span>
                                <span class="dots"></span>
                                <span>300,000 vnđ</span>
                            </li>
                            <li className="fs-4">   
                                <span>Bò sốt tiêu đen</span>
                                <span class="dots"></span>
                                <span>120,000 vnđ</span>
                            </li>
                            <li className="fs-4">   
                                <span>Bò hầm rau củ</span>
                                <span class="dots"></span>
                                <span>180,000 vnđ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2"></div>
                </div>
            </section>
        </>
    );
}
export default MainCourseMenu;