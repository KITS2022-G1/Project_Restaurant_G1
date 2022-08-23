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
    var listResTables = [];
    if (ResTables.length != 0) {
        listResTables = ResTables.slice(pagesVisited, pagesVisited + ResTablesPerPage).map((ResTables) => (
            <tr key={ResTables.tableId}>
            <th scope="row">{ResTables.tableId}</th>
            <Link to={'/bill'}><td>{ResTables.tableName}</td></Link>
            <td>{ResTables.restableCapacity}</td>
            <td>
                <Link to={`/detail/` + ResTables.tableId}><button className='btn btn-warning'>Detail</button></Link>
            </td>

            <td>
                <Link to={`/edit/` + ResTables.tableId}><button className='btn btn-info'>Edit</button></Link>
            </td>
            <td>
                
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
                <div class="row" style={{  backgroundRepeat: "no-repeat", }}>

                    <div class='row border'>

                        <div className="input-group">
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
                        </div>
                        <div>
                            <Link to={`/add`}><button className='btn btn-success'> Add </button></Link>
                        </div>
                        <div>
                            <Link to={`/delete`}><button className='btn btn-success'> Id Bigger </button></Link>
                        </div>

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

                    <Link to={'/bill'}> <button className='btn btn-info' > next </button></Link>
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