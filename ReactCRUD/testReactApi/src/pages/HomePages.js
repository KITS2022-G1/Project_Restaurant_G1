import React, { useEffect, useState } from 'react';
import EmpServices from '../services/EmpServices';
import { Link } from "react-router-dom";

function HomePages() {

    const [branches, setBranches] = useState([]);
    const sortPriceDown = () => {
        const sortData = [...branches];
        sortData.sort((a, b) => a.branchAddress - b.branchAddress);
        setBranches(sortData);
    };
    const sortPriceUp = () => {
        const sortData = [...branches];
        sortData.sort((a, b) => b.branchAddress - a.branchAddress);
        setBranches(sortData);
      };
  

    useEffect(() => {
        EmpServices.getAllBranches().then((response) => {
            setBranches(response.data);
        });
    }, []);

    var listBranches = [];
    if (branches != null) {
        listBranches = branches.map((branch) => (
            
            <tr>
                <th scope="row" key={branch.branchId}>{branch.branchId}</th>
                <td>{branch.branchName}</td>
                <td>{branch.branchAddress}</td>
                <td>{branch.branchEmail}</td>
                <td>
                    <Link to={`/detail/`+branch.branchId}><i class="bi bi-pencil"></i></Link>
                </td>

                <td>
                    <Link to={`/edit/`+branch.branchId}><i class="bi bi-pencil"></i></Link>
                </td>
                <td>
                    <button
                        className="badge badge-danger mr-2"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }

    
    return (
        <div className="container">
 <button
          className="btn btn-outline-info dropdown-toggle ms-2"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Theo Giá
        </button>

        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
          <li>
            <button className="dropdown-item" onClick={() => sortPriceUp()}>
              Giảm dần
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => sortPriceDown()}>
              Tăng Dần
            </button>
          </li>
        </ul>
            <div>
                <Link to={`/add`}><i class="bi bi-pencil">thêm món mới</i></Link>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Tên món ăn</th>
                        <th scope="col">Giá tiền</th>
                        <th scope="col">Hạn sử dụng</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {listBranches}
                </tbody>
            </table>
       
        </div>
    );

}

export default HomePages;