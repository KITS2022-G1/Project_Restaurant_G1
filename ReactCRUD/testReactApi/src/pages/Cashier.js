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
        listResTables = ResTables.slice(pagesVisited, pagesVisited + ResTablesPerPage).map((ResTables) => {
            if(ResTables.restableStatus)
            return(
            <tr key={ResTables.tableId}>
                <th scope="row">{ResTables.tableId}</th>
                <td class='border'>{ResTables.tableName}</td>
                <td>{ResTables.restableCapacity}</td>
                <td>
                    <Link to={'/bill/'+ResTables.tableId} class='nav-link'><button
                        className="btn btn-danger">
                        ?????t
                    </button></Link>
                </td>
            </tr>
            )
        });
    }
    else {
        listResTables = <tr><th>No ResTables</th><td></td></tr>;
    }



    return (
        <>

            <div class='container-fluid'>
                <div class="row" style={{ backgroundRepeat: "no-repeat", }}>

                    <div class='row '>
                        <section style={{ paddingTop: "2rem" }}></section>
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
                            <Link to={'/change'}><button className="btn btn-success mt-2"> Chuy???n tr???ng th??i b??n</button></Link>
                        </div>
{/*------------------------------------------------------------------------------------------------------------------------- */}
                        <span className='h5 mt-2'>
                            B??? l???c:
                        </span>
                        <div>
                        <button
                            className="btn btn-outline-info dropdown-toggle ms-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                        >
                            S??? ch???
                        </button>


                        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li>
                                <button className="dropdown-item" onClick={() => sortCapacityUp()}>
                                    Gi???m d???n
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => sortCapacityDown()}>
                                    T??ng D???n
                                </button>
                            </li>
                        </ul>
                        </div>
{/*------------------------------------------------------------------------------------------------------------------------- */}

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#ID</th>
                                    <th scope="col">T??n b??n</th>
                                    <th scope="col">S??? ch???</th>
                                    <th scope="col">?????t</th>
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