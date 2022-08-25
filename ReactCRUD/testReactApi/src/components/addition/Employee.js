import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import EmployeeService from '../../services/EmployeeService';


function Employee() {

    const [branches, setBranches] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        EmployeeService.getAllEmployees(searchTerm).then((response) => {
            setBranches(response.data);
        });
    }, [searchTerm]);

    const branchPerPage = 5;
    const pagesVisited = pageNumber * branchPerPage;

    const pageCount = Math.ceil(branches.length / branchPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    const deleteBranch = (id) => {
        if (window.confirm('Are you sure?') === true) {
            EmployeeService.deleteEmployee(id).then((response) => {
                setBranches(response.data);
            })
        }
        else {

        }
    }

    var listBranches = [];
    if (branches.length !== 0) {
        listBranches = branches.slice(pagesVisited, pagesVisited + branchPerPage).map((branch) => (
            <tr key={branch.employeeId}>
                <th scope="row">{branch.employeeId}</th>
                <td>{branch.employeeName}</td>
                <td>{branch.employeeAddress}</td>
                <td>{branch.employeeEmail}</td>
                <td>{branch.employeeGender? (
                      <span>Nam</span>
                    ) : (
                      <span>Nữ</span>
                    )}</td>
                <td>{branch.employeePhone}</td>
                <td>
                    <Link to={`/employeedetail/` + branch.employeeId}><button className='btn btn-warning'>Detail</button></Link>
                </td>

                <td>
                    <Link to={`/edit/` + branch.employeeId}><button className='btn btn-info'>Edit</button></Link>
                </td>
                <td>
                    <button
                        className="btn btn-danger" onClick={() => deleteBranch(branch.employeeId)}
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

    const onClickEnter=(event)=>{
        if(event.key==='Enter'){
            setSearchTerm(document.querySelectorAll('input[name=inputSearch]')[0].value);
        }
    }

    return (
        <div className="container">
            <div className="input-group mt-4">
                <input
                    type="text"
                    className="form-control"
                    name="inputSearch"
                    onKeyDown={onClickEnter}
                ></input>
                <div className="input-group-append">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={()=>setSearchTerm(document.querySelectorAll('input[name=inputSearch]')[0].value)}

                    >
                        SEARCH
                    </button>
                </div>
            </div>
            <div className='mt-2'>
                <Link to={`/add`}><button className='btn btn-success'> Add </button></Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Employee Address</th>
                        <th scope="col">Employee Email</th>
                        <th scope="col">Employee Gender</th>
                        <th scope="col">Employee Phone</th>
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
    );

}

export default Employee;