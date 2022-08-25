import React, { useEffect, useState } from 'react'
import EmpServices from '../services/EmpServices';
import { useParams, useNavigate, Link  } from "react-router-dom";

function EmpUpdate() {

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
              <input name='branchAddress' className='form-control' value={branch.branchAddress} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Name: </label>
              <input name='branchName' className='form-control' value={branch.branchName} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Card Number: </label>
              <input name='branchCardNumber' className='form-control' value={branch.branchCardNumber} onChange={(e) => handleChange(e)}>
              </input>
            </div>
            <label> Branch Email: </label>
            <input name='branchEmail' className='form-control' value={branch.branchEmail} onChange={(e) => handleChange(e)}>
            </input>

            <div className='form-group'>
              <label> Branch Image URL: </label>
              <input name='branchImageURL' className='form-control' value={branch.branchImageURL} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Manager Name: </label>
              <input name='branchManagerName' className='form-control' value={branch.branchManagerName} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Phone: </label>
              <input name='branchPhone' className='form-control' value={branch.branchPhone} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <button className='btn btn-info' onClick={() => updateUser()}> Update </button>
            <Link to={"/"}><button className='btn btn-secondary'> Cancle </button></Link>
        </div>
    );
  }else{
    layout=(<><h1>Error 404</h1></>);
  }

  const updateUser = () => {
    // EmpServices.updateBranch(params.branchId,branch);
    EmpServices.updateBranch(branch.branchId, branch).then(res => {
      console.log("update success!");
      navigate(-1);
    });
  }

    return (
      <div className='container mt-4'>
        <h1> Update Branch </h1>
        {layout}
      </div>
    );
}

export default EmpUpdate;




