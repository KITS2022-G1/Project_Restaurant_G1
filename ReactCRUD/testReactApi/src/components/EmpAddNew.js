import React, { Component, useState } from 'react'
import EmpServices from './EmpServices';
import { Link } from 'react-router-dom';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function EmpAddNew(){
  const [branch, setBranch] = useState([]);
  // var branchNew = {};
  // branchNew.branchAddress='';
  // branchNew.branchName= '';
  // branchNew.branchCardNumber= '';
  // branchNew.branchEmail= '';
  // branchNew.branchImageURL= '';
  // branchNew.branchManagerName= '';
  // branchNew.branchPhone= '';

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...branch };
    data[name] = value;

    setBranch(data);
  }

  const saveBranch = (event) => {
    EmpServices.addNewBranch(branch).then(res =>{
      console.log('save success!');
    });
  }


    return (
      <div>
        <h1> Add New Branch </h1>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label> Branch Address: </label>
              <input placeholder='Branch Address' name='branchAddress' className='form-control' value={branch.branchAddress} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Name: </label>
              <input placeholder='Branch Name' name='branchName' className='form-control' value={branch.branchName} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Card Number: </label>
              <input placeholder='Branch Card Number' name='branchCardNumber' className='form-control' value={branch.branchCardNumber} onChange={(e) => handleChange(e)}>
              </input>
            </div>
            <label> Branch Email: </label>
            <input placeholder='Branch Email' name='branchEmail' className='form-control' value={branch.branchEmail} onChange={(e) => handleChange(e)}>
            </input>

            <div className='form-group'>
              <label> Branch Image URL: </label>
              <input placeholder='Branch Image URL' name='branchImageURL' className='form-control' value={branch.branchImageURL} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Manager Name: </label>
              <input placeholder='Branch Manager Name' name='branchManagerName' className='form-control' value={branch.branchManagerName} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Phone: </label>
              <input placeholder='Branch Phone' name='branchPhone' className='form-control' value={branch.branchPhone} onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <button className='btn btn-info' onClick={() => saveBranch()}> Save </button>
            <Link to={"/"}><button className='btn btn-secondary'> Cancle </button></Link>

          </form>
        </div>

      <div>
        <MDBValidation className='row g-3'>
      <MDBValidationItem className='col-md-4'>
      <MDBInput
          placeholder='Branch Address'
          name='branchAddress'
          className='form-control'
          value={branch.branchAddress}
          onChange={(e) => handleChange(e)}
        />
        </MDBValidationItem>
        <div className='col-12'>
        <MDBBtn type='submit'>Submit form</MDBBtn>
        <MDBBtn type='reset'>Reset form</MDBBtn>
      </div>
        </MDBValidation>
      </div>

      </div>
    )
}

export default EmpAddNew;
