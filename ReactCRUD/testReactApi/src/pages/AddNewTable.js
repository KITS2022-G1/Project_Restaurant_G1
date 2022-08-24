import React, { Component, useState } from 'react'
import ResTableService from '../services/ResTableService';
import { Link } from 'react-router-dom';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function TableAddNew() {
  const [ResTables, setResTables] = useState([]);


  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...ResTables };
    data[name] = value;

    setResTables(data);
  }

  const saveResTables = (event) => {
    ResTableService.addNewResTables(ResTables).then(res => {
      console.log('save success!');
    });
  }


  return (
    <div className='container col-md-8'>
      <h1> Add New ResTables </h1>
      <div>
        <MDBValidation className='row g-3'>

          <label> ResTables : </label>
          <MDBValidationItem feedback='Please provide a valid address.' invalid>
            <MDBInput
              placeholder='ResTables Address'
              name='ResTablesAddress'
              className='form-control'
              value={ResTables.ResTablesAddress}
              onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> ResTables Name: </label>
          <MDBValidationItem feedback='Please provide a valid name.' invalid>
            <MDBInput
              placeholder='ResTables Name' name='ResTablesName' className='form-control' value={ResTables.tableName} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> ResTables Capacity: </label>
          <MDBValidationItem feedback='Please provide a valid card number.' invalid>
            <MDBInput
              placeholder='ResTables Card Number' name='ResTablesCardNumber' className='form-control' value={ResTables.restableCapacity} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <div className='col-12'>
            <MDBBtn type='submit' className='btn btn-info me-2' onClick={(e) => saveResTables(e)}>Save</MDBBtn>
            <MDBBtn type='reset' className='btn btn-danger me-2'>Reset form</MDBBtn>
            <Link to={"/cashier"}><button className='btn btn-secondary me-2'> Cancel </button></Link>
          </div>
        </MDBValidation>
      </div>

    </div>
  )
}

export default TableAddNew;
