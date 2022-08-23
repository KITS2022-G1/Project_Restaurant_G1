import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const Cashier = () => {

    const [content, setContent] = useState('');

    useEffect(() => {
        UserService.getUserBoard().then((response) => {
            setContent(response.data);
        });
            if (content) {
                EventBus.dispatch("logout");
            }
    }, []);

    return (
        <>

            <div class='container-fluid'>
                <div class="row" style={{backgroundImage: `url(${logo})`, backgroundRepeat:"no-repeat",}}>
                    <div class="col-6 ">
                        <div class='row border'>
                            <h5> Khu vực bàn từ 10 người trở xuống</h5>
                            <div class="col-4 col-lg-4 col-sm-4 ">
                                <Link to={'/table'}>
                                    <button className="mt-4">
                                        Bàn1<br/>Số chỗ tối đa:4
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn4<br/>Số chỗ tối đa:6
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn7<br/>Số chỗ tối đa:8
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn10<br/>Số chỗ tối đa:10
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn13<br/>Số chỗ tối đa:10
                                        </button><br />
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 col-sm-4">
                                <Link to={'/table'}>
                                    <button className="mt-4">
                                        Bàn2<br/>Số chỗ tối đa:4
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn5<br/>Số chỗ tối đa:6
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn8<br/>Số chỗ tối đa:8
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn11<br/>Số chỗ tối đa:10
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn14<br/>Số chỗ tối đa:10
                                        </button><br />
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 col-sm-4">
                                <Link to={'/table'}>
                                    <button className="mt-4">
                                        Bàn3<br/>Số chỗ tối đa:4
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn6<br/>Số chỗ tối đa:6
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn9<br/>Số chỗ tối đa:8
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn12<br/>Số chỗ tối đa:10
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn15<br/>Số chỗ tối đa:10
                                        </button><br />
                                </Link>
                            </div>
                            <section style={{ paddingTop: "2rem", }}></section>
                        </div>
                        <div class='row border'>
                        <h5> Khu vực bàn từ 10 người trở lên</h5>

                            <div class="col-4 col-lg-4 col-sm-4 ">
                                <Link to={'/table'}>
                                    <button className="mt-4">
                                        Bàn16<br/>Số chỗ tối đa:14
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn19<br/>Số chỗ tối đa:16
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn22<br/>Số chỗ tối đa:18
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn25<br/>Số chỗ tối đa:20
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn28<br/>Số chỗ tối đa:20
                                        </button><br />
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 col-sm-4">
                                <Link to={'/table'}>
                                    <button className="mt-4">
                                        Bàn17<br/>Số chỗ tối đa:14
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn20<br/>Số chỗ tối đa:16
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn23<br/>Số chỗ tối đa:18
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn26<br/>Số chỗ tối đa:20
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn29<br/>Số chỗ tối đa:20
                                        </button><br />
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 col-sm-4">
                                <Link to={'/table'}>
                                    <button className="mt-4">
                                        Bàn18<br/>Số chỗ tối đa:14
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn21<br/>Số chỗ tối đa:16
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn24<br/>Số chỗ tối đa:18
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn27<br/>Số chỗ tối đa:20
                                        </button><br />
                                    <button className="mt-4">
                                        Bàn30<br/>Số chỗ tối đa:20
                                        </button><br />
                                </Link>
                            </div>
                            <section style={{ paddingTop: "2rem", }}></section>
                        </div>
                    </div>
                    <div class="col-6 border">
                    <section style={{ paddingTop: "7rem", }}></section>
                        <div class='border'>
                            <h1 class="text-center">Hóa đơn, Thông tin khách hàng</h1>

                            <form>

                                <div className='form-group'>
                                <section style={{ paddingTop: "2rem", }}></section>
                                    <input placeholder='Name:' name='branchName' className='form-control' >
                                    </input>
                                </div>

                                <div className='form-group'>
                                <section style={{ paddingTop: "2rem", }}></section>
                                    <input placeholder='Phone Number:' name='branchCardNumber' className='form-control' >
                                    </input>
                                </div>
                                <section style={{ paddingTop: "2rem", }}></section>
                                <input placeholder=' Email:' name='branchEmail' className='form-control'>
                                </input>

                                <div className='form-group'>
                                <section style={{ paddingTop: "2rem", }}></section>
                                    <input placeholder='Address:' name='branchAddress' className='form-control'>
                                    </input>
                                </div>

                                <div className='form-group'>
                                <section style={{ paddingTop: "2rem", }}></section>
                                    <input placeholder='ID Table' name='idTable' className='form-control' >
                                    </input>
                                </div>


                                <section style={{ paddingTop: "2rem", }}></section>
                                <button className='btn btn-info' > Save </button>
                                <button className='btn btn-secondary'> Clear </button>

                            </form>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};
export default Cashier;