import React, { useEffect, useState } from 'react';
import EmpServices from './EmpServices';
import { Link } from "react-router-dom";

function Home() {

    const [branches, setBranches] = useState([]);

    useEffect(() => {
        EmpServices.getAllBranches().then((response) => {
            setBranches(response.data);
        });
    }, []);

    const deleteBranch = (id) => {
        if (window.confirm('Are you sure?') == true) {
        EmpServices.deleteBranch(id).then((response) => {
            setBranches(response.data);
        })
        }
        else{

        };
    }

    var listBranches = [];
    if (branches.length != 0) {
        listBranches = branches.map((branch) => (
            <tr key={branch.branchId}>
                <th scope="row">{branch.branchId}</th>
                <td>{branch.branchName}</td>
                <td>{branch.branchAddress}</td>
                <td>{branch.branchEmail}</td>
                <td>
                    <Link to={`/detail/` + branch.branchId}><i className="bi bi-pencil"></i></Link>
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
    else{
        listBranches =<tr><th>NO BRANCH</th><td></td></tr>;
    }

    return (
        <div className="container">

            <div>
                <Link to={`/add`}><button className='btn btn-success'> Add </button></Link>
            </div>

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
        </div>
    );

}

export default Home;