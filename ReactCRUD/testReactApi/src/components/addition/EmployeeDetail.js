import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link  } from "react-router-dom";
import EmployeeService from '../../services/EmployeeService';

function EmployeeDetail() {

  const params = useParams();
  const [branch, setBranch] = useState(null);
  let navigate = useNavigate();

  useEffect(()=>{
    EmployeeService.getEmployeeById(params.employeeId).then((response) => {
      setBranch(response.data);
  });
  console.log("fxdfxfxfxdfd"+params.branchId);
  },[]);

  var layout;
  if(branch!=null){
    layout=(
      <div className='card-body'>
            <div className='form-group'>
              <label> Employee Name: </label>
              <p className='form-control'> {branch.employeeName}
              </p>
            </div>

            <div className='form-group'>
              <label> Employee Address: </label>
              <p name='branchName' className='form-control'> {branch.employeeAdress}
              </p>
            </div>

            <div className='form-group'>
              <label> Employee Email: </label>
              <p name='branchCardNumber' className='form-control'> {branch.employeeEmail}
              </p>
            </div>
            <label> Employee Image: </label>
            <p name='branchEmail' className='form-control'>{branch.employeeImageURL}
            </p>

            <div className='form-group'>
              <label> Employee Gender: </label>
              <p name='branchImageURL' className='form-control'>{branch.employeeGender}
              </p>
            </div>

            <div className='form-group'>
              <label> Employee Branch: </label>
              <p name='branchManagerName' className='form-control'> {branch.branchId}
              </p>
            </div>

            <div className='form-group'>
              <label> Employee Phone: </label>
              <p name='branchPhone' className='form-control'> {branch.employeePhone}
              </p>
            </div>

            <Link to={"/"}><button className='btn btn-secondary'> Back </button></Link>
        </div>
    );
  }else{
    layout=(<><h1>Error 404</h1></>);
  }

    return (
      <div className='container mt-4'>
        <h1> Employee Detail </h1>
        {layout}
      </div>
    );
}

export default EmployeeDetail;




