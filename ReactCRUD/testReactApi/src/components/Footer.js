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
                                © La Table Hanoia 2021.<br />
                                Giấy chứng nhận đăng ký doanh nghiệp, mã số doanh nghiệp: 0100107518, đăng ký lần đầu ngày 30/6/2010, đăng ký thay đổi lần thứ 7 ngày 01/01/2021, cấp bởi Sở Vệ sinh an toàn thực phẩm thành phố Hà Nội.<br />
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
