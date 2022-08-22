import React, { useEffect, useState } from 'react';
import EmpServices from '../services/EmpServices';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

export default function EmpDel() {
  const [branches, setBranches] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [idAvg, setIdAvg] = useState(0);


  useEffect(() => {
    EmpServices.getBranchIdBiggerAvg().then((response) => {
      setBranches(response.data);
    });

    EmpServices.getIdBiggerAvg().then((response) => {
      setIdAvg(response.data);
    });
  }, []);

  const branchPerPage = 5;
  const pagesVisited = pageNumber * branchPerPage;

  const pageCount = Math.ceil(branches.length / branchPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  const deleteBranch = (id) => {
    if (window.confirm('Are you sure?') == true) {
      EmpServices.deleteBranch(id).then((response) => {
        setBranches(response.data);
      })
    }
    else {

    }
  }

  var listBranches = [];
  if (branches.length != 0) {
    listBranches = branches.slice(pagesVisited, pagesVisited + branchPerPage).map((branch) => (
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
    <div className="container">

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Branch Name</th>
            <th scope="col">Branch Address</th>
            <th scope="col">Branch Email</th>
            <th scope="col">Detail</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {listBranches}
        </tbody>
      </table>

      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  )
}

