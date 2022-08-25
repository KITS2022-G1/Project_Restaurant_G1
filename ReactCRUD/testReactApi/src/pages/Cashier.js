import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import ResTableServices from '../services/ResTableService';

const Cashier = () => {


    const [ResTables, setResTables] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        ResTableServices.getAllResTables(searchTerm).then((response) => {
            setResTables(response.data);
        });
    }, [searchTerm]);

    const ResTablesPerPage = 8;
    const pagesVisited = pageNumber * ResTablesPerPage;

    const pageCount = Math.ceil(ResTables.length / ResTablesPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    const clickView = () => {
        window.scrollTo(0, 0);
    }


const sortCapacityUp = () => {
    const sortData = [...ResTables];
    sortData.sort((a, b) => a.restableCapacity - b.restableCapacity);
    setResTables(sortData);
  };

  const sortCapacityDown = () => {
    const sortData = [...ResTables];
    sortData.sort((a, b) => b.restableCapacity - a.restableCapacity);
    setResTables(sortData);
  };



  const deleteResTables = (id) => {
    if (window.confirm('Are you sure?') == true) {
        ResTableServices.deleteResTables(id).then((response) => {
            setResTables(response.data);
        })
    }
    else {

    }
}



    var listResTables = [];
    if (ResTables.length != 0) {
        listResTables = ResTables.slice(pagesVisited, pagesVisited + ResTablesPerPage).map((ResTables) => (
            <tr key={ResTables.tableId}>
                <th scope="row">{ResTables.tableId}</th>
                <Link to={'/bill'} class='nav-link'><td class='border'>{ResTables.tableName}</td></Link>
                <td>{ResTables.restableCapacity}</td>
                <td>
                    <Link to={`/detail/` + ResTables.tableId}><button className='btn btn-warning'>Detail</button></Link>
                </td>

                <td>
                    <Link to={`/edit/` + ResTables.tableId}><button className='btn btn-info'>Edit</button></Link>
                </td>
                <td>
                    <button
                        className="btn btn-danger" onClick={() => deleteResTables(ResTables.tableId)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }
    else {
        listResTables = <tr><th>No ResTables</th><td></td></tr>;
    }



    return (
        <>

            <div class='container-fluid'>
                <div class="row" style={{ backgroundRepeat: "no-repeat", }}>

                    <div class='row '>
                        <section style={{ paddingTop: "10rem" }}></section>
                        {/*   <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                name="inputSearch"
                               
                            ></input>
                            <div className="input-group-append">
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={() => setSearchTerm(document.querySelectorAll('input[name=inputSearch]')[0].value)}

                                >
                                    SEARCH
                                </button>
                            </div>
                        </div> */}
                        <div>
                            <Link to={`/addTable`}><button className='btn btn-success'> Add </button></Link>
                        </div>
{/*------------------------------------------------------------------------------------------------------------------------- */}
                        <span className='h5'>
                            Bộ lọc:
                        </span>

                        <button
                            className="btn btn-outline-info dropdown-toggle ms-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                        >
                            Số chỗ
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li>
                                <button className="dropdown-item" onClick={() => sortCapacityUp()}>
                                    Giảm dần
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => sortCapacityDown()}>
                                    Tăng Dần
                                </button>
                            </li>
                        </ul>
{/*------------------------------------------------------------------------------------------------------------------------- */}

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#ID</th>
                                    <th scope="col">Table Name</th>
                                    <th scope="col">Table Capacity</th>
                                    <th scope="col">Detail</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {listResTables}
                            </tbody>
                        </table>
                    </div>


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

            </div>


        </>
    );
};
export default Cashier;