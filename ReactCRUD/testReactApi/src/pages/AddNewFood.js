import React, { Component, useState } from 'react'
import FoodServices from '../services/FoodServices';
import { Link } from 'react-router-dom';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function FoodAddNew() {
  const [foods, setfoods] = useState([]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...foods };
    data[name] = value;

    setfoods(data);
  }

  const savefoods = (event) => {
    FoodServices.addNewFood(foods).then(res => {
      console.log('save success!');
    });
  }


  return (
    <div className='container col-md-8'>
      <h1> Add New foods </h1>
      <div>
        <MDBValidation className='row g-3'>


          {/* --------------------------------------------------------- */}

          <label> foods Name: </label>
          <MDBValidationItem feedback='Please provide a valid name.' invalid>
            <MDBInput
              placeholder='foods Name' name='foodsName' className='form-control' value={foods.foodName} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> foods Pricer: </label>
          <MDBValidationItem feedback='Please provide a valid card number.' invalid>
            <MDBInput
              placeholder='foods Card Number' name='foodPrice' className='form-control' value={foods.foodPrice} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> foods Source: </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              placeholder='foods Email' name='foodSource' className='form-control' value={foods.foodSource} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> foods ImageURL: </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              placeholder='foods Image URL' name='foodImageURL' className='form-control' value={foods.foodImageURL} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> foods Date: </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              placeholder='foods Manager Name' name='foodDate' className='form-control' value={foods.foodDate} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}
          <div className='col-12'>
            <MDBBtn type='submit' className='btn btn-info me-2' onClick={(e) => savefoods(e)}>Save</MDBBtn>
            <MDBBtn type='reset' className='btn btn-danger me-2'>Reset form</MDBBtn>
            <Link to={"/"}><button className='btn btn-secondary me-2'> Cancel </button></Link>
          </div>
        </MDBValidation>
      </div>

    </div>
  )
}

export default FoodAddNew;
