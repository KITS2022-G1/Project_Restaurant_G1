import React, { Component } from 'react'
import EmpServices from './EmpServices'
import { Link } from "react-router-dom";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {

        EmpServices.getAllEmps().then((res) => {
            this.setState({ employees: res.data });
            //console.log("OK");
        })

    }

    render() {
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
                        {this.state.employees.map(employee =>

                            <tr>
                                <th scope="row" key={employee.branchId}>{employee.branchId}</th>
                                <td>{employee.branchName}</td>
                                <td>{employee.branchAddress}</td>
                                <td>{employee.branchEmail}</td>
                                <td>
                                    <Link to={`/detail?${employee.branchId}`}><i class="bi bi-pencil"></i></Link>
                                </td>

                                <td>
                                    <Link to={`/edit/${employee.branchId}`}><i class="bi bi-pencil"></i></Link>
                                </td>
                                <td>
                                    <button
                                        className="badge badge-danger mr-2"
                                        onClick={this.deleteTutorial}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}
