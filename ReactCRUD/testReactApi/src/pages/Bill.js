import React from "react";
import { Link } from "react-router-dom";
import ResTableServices from '../services/ResTableService';


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
                                <div className='text-center'>
                                <button className='btn btn-info'>  <Link to={'/table'} className='nav-link'>Save</Link> </button> <span> </span>
                                <button className='btn btn-secondary'><Link to={'/cashier'} className='nav-link'> Back</Link> </button>
                                </div>
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
                                <input placeholder='NameTable:' name='NameTable' className='form-control' >
                                </input>
                            </div>
                            <section style={{ paddingTop: "2rem", }}></section>
                            <input placeholder=' TableCapacity:' name='TableCapacity' className='form-control'>
                            </input>

                            <div className='form-group'>
                                <section style={{ paddingTop: "2rem", }}></section>
                                <input placeholder='BranchName:' name='BranchName' className='form-control'>
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