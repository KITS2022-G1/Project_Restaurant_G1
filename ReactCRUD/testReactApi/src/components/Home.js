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

            <div>
                <Link to={`/add`}><i class="bi bi-pencil"></i></Link>
            </div>

            <table class="table">
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
                <tbody class="table-group-divider">
                    {listBranches}
                </tbody>
            </table>
        </div>
    );

}

export default Home;