import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BillService from "../services/BillService";
import { Link } from 'react-router-dom';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';

export default function Order() {
  const params = useParams();

  const [bill, setBill] = useState([]);

  useEffect(() => {
    let initData = {};
    initData.employee = {};
    initData.customer = {};
    setBill(initData);
  }, []);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...bill };
    data[name] = value;

    setBill(data);
  }

  const handleChangeEmployee = (event) => {
    //console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = { ...bill };
    data.employee[name] = value;

    console.log(data);
    setBill(data);
  };

  const handleChangeCustomer = (event) => {
    //console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = { ...bill };
    data.customer[name] = value;
    console.log(data);
    setBill(data);
  };

  const handleChangeTotalPrice = (event) => {
    //console.log(event);
    let data = { ...bill };
    data.billTotalMoney = params.totalPrice;
    setBill(data);
  };



  const saveBill = (event) => {
    BillService.addNewBill(bill).then(res => {
      console.log('save success!');
    });
  }

  return (
    <div className='container col-md-8'>
      <h1> Add New Bill </h1>
      <div>
        <MDBValidation className='row g-3'>

          <label> Bill Date: </label>
          <MDBValidationItem feedback='Please provide a valid Date.' invalid>
            <MDBInput
              placeholder='Bill Date'
              name='billDate'
              className='form-control'
              value={bill.billDate}
              onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Bill Title: </label>
          <MDBValidationItem feedback='Please provide a valid title.' invalid>
            <MDBInput
              placeholder='Bill Title' name='billTitle' className='form-control' value={bill.billTitle} onChange={(e) => handleChange(e)}
              required
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Customer Id: </label>
          <MDBValidationItem feedback='Please provide a valid customerId.' invalid>
            <MDBInput
              placeholder='Customer Id' name='customerId' className='form-control' value={bill.customerId} onChange={(e) => handleChangeCustomer(e)}
            />
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Employee Id: </label>
          <MDBValidationItem feedback='Please provide a valid employeeId.' invalid>
            <MDBInput
              placeholder='Employee Id' name='employeeId' className='form-control' value={bill.employeeId} onChange={(e) => handleChangeEmployee(e)}
              required/>
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <label> Bill Total (vnđ): </label>
          <MDBValidationItem feedback='Please provide a valid card email.' invalid>
            <MDBInput
              name="billTotalMoney"
              className='form-control' value={params.totalPrice} onChange={(e) => handleChangeTotalPrice(e)}
              required/>
          </MDBValidationItem>

          {/* --------------------------------------------------------- */}

          <div className='col-12'>
            <Link to={'/success'}><MDBBtn type='submit' className='btn btn-info me-2' onClick={(e) => saveBill(e)}>Save</MDBBtn></Link>
            <MDBBtn type='reset' className='btn btn-danger me-2'>Reset form</MDBBtn>
            <Link to={"/"}><button className='btn btn-secondary me-2'> Cancel </button></Link>
          </div>
        </MDBValidation>
      </div>

    </div>
  )

}

