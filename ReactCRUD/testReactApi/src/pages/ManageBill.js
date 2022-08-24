import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import BillService from "../services/BillService";

const ManageBill = () => {


    const [bill, setBill] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        BillService.getAllBills(searchTerm).then((response) => {
            setBill(response.data);
        });
    }, [searchTerm]);

    const billPerPage = 8;
    const pagesVisited = pageNumber * billPerPage;

    const pageCount = Math.ceil(bill.length / billPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const clickView = () => {
        window.scrollTo(0, 0);
    }

    const sortCapacityUp = () => {
        const sortData = [...bill];
        sortData.sort((a, b) => a.restableCapacity - b.restableCapacity);
        setBill(sortData);
    };

    const sortCapacityDown = () => {
        const sortData = [...bill];
        sortData.sort((a, b) => b.restableCapacity - a.restableCapacity);
        setBill(sortData);
    };

    const deleteBill = (id) => {
        if (window.confirm('Are you sure?') === true) {
            BillService.deleteBill(id).then((response) => {
                setBill(response.data);
            })
        }
        else {

        }
    }

    var listBill = [];
    if (bill.length != 0) {
        listBill = bill.slice(pagesVisited, pagesVisited + billPerPage).map((bill) => (
            <tr key={bill.billId}>
                <th scope="row">{bill.billId}</th>
                <Link to={'/bill'} class='nav-link'><td class='border'>{bill.billTitle}</td></Link>
                <td>{bill.billDate}</td>
                <td>{bill.billTotalMoney}</td>
                <td>
                    <Link to={`/detail/` + bill.tableId}><button className='btn btn-warning'>Detail</button></Link>
                </td>

                <td>
                    <Link to={`/edit/` + bill.tableId}><button className='btn btn-info'>Edit</button></Link>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={() => deleteBill(bill.billId)}>Delete</button>
                </td>
            </tr>
        ));
    }
    else {
        listBill = <tr><th>No bill</th><td></td></tr>;
    }



    return (
        <>

            <div class='container-fluid'>
                <div class="row" style={{ backgroundRepeat: "no-repeat", }}>

                    <div class='row '>
                        <section style={{ paddingTop: "10rem" }}></section>
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
                                    <th scope="col">Bill Title</th>
                                    <th scope="col">Bill Date</th>
                                    <th scope="col">Bill Total Money</th>
                                    <th scope="col">Detail</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {listBill}
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
export default ManageBill;