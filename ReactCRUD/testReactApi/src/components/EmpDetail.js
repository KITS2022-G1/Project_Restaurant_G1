import React, { useEffect, useState } from 'react'
import EmpServices from './EmpServices';
import { useParams, useNavigate, Link  } from "react-router-dom";

function EmpDetail() {

  const params = useParams();
  const [branch, setBranch] = useState(null);
  let navigate = useNavigate();

  useEffect(()=>{
    EmpServices.getBranchById(params.branchId).then((response) => {
      setBranch(response.data);
  });
  console.log("fxdfxfxfxdfd"+params.branchId);
  },[]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...branch };
    data[name] = value;

    setBranch(data);
    console.log(branch.branchAddress);
  }

  var layout;
  if(branch!=null){
    layout=(
      <div className='card-body'>
            <div className='form-group'>
              <label> Branch Address: </label>
              <p name='branchAddress' className='form-control' value={branch.branchAddress}>
              </p>
            </div>

            <div className='form-group'>
              <label> Branch Name: </label>
              <p name='branchName' className='form-control'> {branch.branchName}
              </p>
            </div>

            <div className='form-group'>
              <label> Branch Card Number: </label>
              <p name='branchCardNumber' className='form-control'> {branch.branchCardNumber}
              </p>
            </div>
            <label> Branch Email: </label>
            <p name='branchEmail' className='form-control'>{branch.branchEmail}
            </p>

            <div className='form-group'>
              <label> Branch Image URL: </label>
              <p name='branchImageURL' className='form-control'>{branch.branchImageURL}
              </p>
            </div>

            <div className='form-group'>
              <label> Branch Manager Name: </label>
              <p name='branchManagerName' className='form-control'> {branch.branchManagerName}
              </p>
            </div>

            <div className='form-group'>
              <label> Branch Phone: </label>
              <p name='branchPhone' className='form-control'> {branch.branchPhone}
              </p>
            </div>

            <Link to={"/"}><button className='btn btn-secondary'> Back </button></Link>
        </div>
    );
  }else{
    layout=(<><h1>Error 404</h1></>);
  }

    return (
      <div>
        <h1> Update Branch </h1>
        {layout}
      </div>
    );
}

export default EmpDetail;




