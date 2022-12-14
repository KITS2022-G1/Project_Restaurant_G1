import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import logo from '../image/logo1.jpg'
import footer from '../css/footer.css';

const Footer = () => {
    return (
        <footer>

            <div className="footer-body">

                <div className="container">

                    <div className='row' >
                        <div className='rounded float-start col-md-3 col-sm-2'>
                            <Link to="/#start"><img src={logo} alt=".." className='rounded-circle  mt-4 ms-5' style={{width: '60%', height: undefined, aspectRatio: 1 / 1,}}></img></Link>
                        </div>
                       <div className='col-md-9 col-sm-2 row'>
                       <div className="col-md-3 col-sm-2">
                            <li className="menu-item-title h4 ">Contact information</li>
                            <li className="menu-item">36 Hoang Cau</li>
                            <li className="menu-item">Tax number: 0123456789</li>
                            <li className="menu-item">Press Club Bulding</li>
                            <li className="menu-item">Add: 36 Hoang Cau, Ha Noi</li>
                            <li className="menu-item">Email: Lamcloudy99@gmail.com </li>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <li className="menu-item-title h4 ">Sitemap</li>
                            <li className="menu-item">ABOUT US</li>
                            <li className="menu-item">MENU</li>
                            <li className="menu-item">SERVICES</li>
                        </div>
                        <div className="col-md-3 col-sm-2">
                            <li className="menu-item-title h4 ">Subscribe</li>
                            <li className="menu-item">SUBSCRIBE
                                Open Everyday: 07:30am to 23:00pm (Last appoinment before 08:30 pm)
                            </li>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <li className="menu-item-title h4 ">Interactive</li>
                            <li className="menu-item">Complain</li>
                            <li className="menu-item">Frequently asked question</li>
                            <li className="menu-item">For restaurant</li>
                            <li className="menu-item">Contact</li>
                        </div>
                       </div>
                    </div>
                    <hr className='text-white' />
                    <div className='row'>
                        <div className='text-center text-white'>
                            <small>
                                ?? La Table Hanoia 2021.<br />
                                Gi???y ch???ng nh???n ????ng k?? doanh nghi???p, m?? s??? doanh nghi???p: 0100107518, ????ng k?? l???n ?????u ng??y 30/6/2010, ????ng k?? thay ?????i l???n th??? 7 ng??y 01/01/2021, c???p b???i S??? V??? sinh an to??n th???c ph???m th??nh ph??? H?? N???i.<br />
                            </small>
                        </div>
                        <div className='col-md-12 mt-3 text-center'>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;