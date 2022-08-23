import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import EmpServices from '../services/EmpServices';

const Favorite = (props) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    console.log('product list useEffect!!');
    setCartItems(props.store_state.Carts);
  }, [props.store_state]);

  const deleteBranch = (id) => {
    if (window.confirm('Are you sure?') == true) {
        EmpServices.deleteBranch(id).then((response) => {
            setBranches(response.data);
        })
    }
    else {

    }
}
  const clickView = () => {
    window.scrollTo(0, 0);
  }

  console.log(cartItems);

  var listBranches = [];
  if (branches.length != 0) {
      listBranches = branches.map((branch) => (
          <tr key={branch.branchId}>
              <th scope="row">{branch.branchId}</th>
              <td>{branch.branchName}</td>
              <td>{branch.branchAddress}</td>
              <td>{branch.branchEmail}</td>
              <td>
                  <Link to={`/detail/` + branch.branchId}><button className='btn btn-warning'>Detail</button></Link>
              </td>

              <td>
                  <Link to={`/edit/` + branch.branchId}><button className='btn btn-info'>Edit</button></Link>
              </td>
              <td>
                  <button
                      className="btn btn-danger" onClick={() => deleteBranch(branch.branchId)}
                  >
                      Delete
                  </button>
              </td>
          </tr>
      ));
  }
  else {
      listBranches = <tr><th>NO BRANCH</th><td></td></tr>;
  }




  return (
    <div class="container-fluid" style={{ paddingTop: "3rem", }}>
      <div class="row">
        <div class="col mt-2">
          <h2 class="text-center">Danh sách yêu thích</h2><br></br>
          <table class="table table-bordered table-striped p-2">
            <thead>
              <tr>
                <th width='300' class="text-center">Ảnh</th>
                <th width='300' class="text-center">Tên món</th>
                <th class="text-center" width='300'>Giá</th>
                <th class="text-center" width='700'>Hạn sử dụng</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length == 0 ? (
                <tr>
                  <td colspan="4" class="text-center">
                    Chưa có món được chọn
                  </td>
                </tr>
              ) : (
                ''
              )}
              {listBranches}
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="text-center">
            <button class="btn btn-primary m-1" onClick={()=>navigate(-1)}>Tiếp tục chọn món</button>
            <button class="btn btn-danger m-1" type="button">
              Liên hệ
            </button>
          </div>

          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Favorite;