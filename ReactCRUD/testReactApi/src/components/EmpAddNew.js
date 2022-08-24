import React, { Component, useState } from 'react'
import EmpServices from '../services/EmpServices';
import { Link } from 'react-router-dom';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function EmpAddNew() {
  const [branch, setBranch] = useState([]);

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
    EmpServices.addNewBranch(branch).then(res => {
      console.log('save success!');
    });
  }


  return (
    <div className='container col-md-8'>
      <h1> Add New Branch </h1>
      <div>
        <MDBValidation className='row g-3'>

          <label> Branch Address: </label>
          <MDBValidationItem feedback='Please provide a valid address.' invalid>
            <MDBInput
              placeholder='Branch Address'
              name='branchAddress'
              className='form-control'
              value={branch.branchAddress}
              onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Branch Name: </label>
          <MDBValidationItem feedback='Please provide a valid name.' invalid>
            <MDBInput
              placeholder='Branch Name' name='branchName' className='form-control' value={branch.branchName} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Branch Card Number: </label>
          <MDBValidationItem feedback='Please provide a valid card number.' invalid>
            <MDBInput
              placeholder='Branch Card Number' name='branchCardNumber' className='form-control' value={branch.branchCardNumber} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Branch Email: </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              placeholder='Branch Email' name='branchEmail' className='form-control' value={branch.branchEmail} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Branch ImageURL: </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              placeholder='Branch Image URL' name='branchImageURL' className='form-control' value={branch.branchImageURL} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Branch Manager Name: </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              placeholder='Branch Manager Name' name='branchManagerName' className='form-control' value={branch.branchManagerName} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Branch Phone: </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              placeholder='Branch Phone' name='branchPhone' className='form-control' value={branch.branchPhone} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}
          <div className='col-12'>
            <MDBBtn type='submit' className='btn btn-info me-2' onClick={(e) => saveBranch(e)}>Save</MDBBtn>
            <MDBBtn type='reset' className='btn btn-danger me-2'>Reset form</MDBBtn>
            <Link to={"/"}><button className='btn btn-secondary me-2'> Cancel </button></Link>
          </div>
        </MDBValidation>
      </div>

    </div>
  )
}

export default EmpAddNew;
