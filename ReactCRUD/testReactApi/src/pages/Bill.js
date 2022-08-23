import React from "react";
import { Link } from "react-router-dom";


const Bill = () => {
    

    return (
        <>
            <div class='container-fluid'>
                <div class='row'>
                    <div class="col-6 col-sm-6 col-md-6 ">
                        <section style={{ paddingTop: "7rem", }}></section>
                        <div class='border'>
                            <h1 class="text-center">Thông tin khách hàng</h1>

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
                                <Link to={'/table'}> <button className='btn btn-info' > Save </button></Link>
                                <Link to={'/cashier'}><button className='btn btn-secondary'> Back </button></Link>

                            </form>
                        </div>
                    </div>
                    <div class='col-6 col-sm-6 col-md-6 '>
                    <section style={{ paddingTop: "7rem", }}></section>
                    <div class='border'>
                    <h1 class="text-center">Thông tin bàn đã chọn</h1>
                    
                        <form>
                        
                            <div className='form-group'>
                                <section style={{ paddingTop: "2rem", }}></section>
                                <input placeholder='ID Table' name='idTable' className='form-control' >
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

                            


                            <section style={{ paddingTop: "2rem", }}></section>
                        </form>
                        </div>
                    </div>
                    


                </div>
            </div>
        </>
    );
};
export default Bill;