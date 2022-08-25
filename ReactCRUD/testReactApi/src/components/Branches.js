import React, { useEffect, useState } from 'react';
import EmpServices from '../services/EmpServices';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';


function Branches() {

    const [branches, setBranches] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        EmpServices.getAllBranches(searchTerm).then((response) => {
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
            EmpServices.deleteBranch(id).then((response) => {
                setBranches(response.data);
            })
        }
        else {

        }
    }

    const sortColumn = (field, type) => {
        const sortData = [...branches];
        if (type == 'string') {
          sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
        } else if (type == 'number') {
          sortData.sort((a, b) => direction * (a[field] - b[field]));
        }
        setDirection(direction * -1);
        setBranches(sortData);
      };

    var listBranches = [];
    if (branches.length !== 0) {
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
                        onClick={()=>setSearchTerm(document.querySelectorAll('input[name=inputSearch]')[0].value)}>
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
                        <th scope="col" onClick={() => sortColumn('branchId', 'number')}>#ID</th>
                        <th scope="col" onClick={() => sortColumn('branchName', 'string')}>Branch Name</th>
                        <th scope="col" onClick={() => sortColumn('branchAddress', 'string')}>Branch Address</th>
                        <th scope="col" onClick={() => sortColumn('branchEmail', 'string')}>Branch Email</th>
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

export default Branches;