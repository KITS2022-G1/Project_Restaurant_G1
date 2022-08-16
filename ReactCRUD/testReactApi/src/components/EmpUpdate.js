import React, { Component } from 'react'
import EmpServices from './EmpServices';
import { useParams } from "react-router-dom";

export const withParams = Component => props => {
  let params = useParams();
  return <Component  {...props} params={params} />;
}

class EmpUpdate extends Component {
  constructor(props) {
    super(props);
    let {branchId} = props.params;
    this.state = {
      branchId: branchId,
      branchAddress: '',
      branchName: '',
      branchCardNumber: '',
      branchEmail: '',
      branchImageURL: '',
      branchManagerName: '',
      branchPhone: '',
    }

    this.changeBranchAddressHandler = this.changeBranchAddressHandler.bind(this);
    this.changeBranchNameHandler = this.changeBranchNameHandler.bind(this);
    this.changeBranchCardNumberHandler = this.changeBranchCardNumberHandler.bind(this);
    this.changeBranchEmailHandler = this.changeBranchEmailHandler.bind(this);
    this.changeBranchImageURLHandler = this.changeBranchImageURLHandler.bind(this);
    this.changeBranchManagerNameHandler = this.changeBranchManagerNameHandler.bind(this);
    this.changeBranchPhoneHandler = this.changeBranchPhoneHandler.bind(this);
    this.saveBranch = this.saveBranch.bind(this);

    console.log(branchId);
  }

  componentDidMount() {
    EmpServices.getBranchById(this.branchId).then( (res) => {
      let branch = res.data;
      this.setState({
        branchName: branch.branchName,
        branchCardNumber: branch.branchCardNumber,
        branchEmail: branch.branchEmail,
        branchImageURL: branch.branchImageURL,
        branchManagerName: branch.branchManagerName,
        branchPhone: branch.branchPhone
      })
    });
  }

  saveBranch = (event) => {
    event.preventDefault();
    let branch = {
      branchAddress: this.state.branchAddress,
      branchName: this.state.branchName,
      branchCardNumber: this.state.branchCardNumber,
      branchEmail: this.state.branchEmail,
      branchImageURL: this.state.branchImageURL,
      branchManagerName: this.state.branchManagerName,
      branchPhone: this.state.branchPhone
    };

    console.log('branch =>' + JSON.stringify(branch));
  }

  cancel() {

  }

  changeBranchNameHandler = (event) => {
    this.setState({ branchName: event.target.value });
  }
  changeBranchAddressHandler = (event) => {
    this.setState({ branchAddress: event.target.value });
  }

  changeBranchCardNumberHandler = (event) => {
    this.setState({ branchCardNumber: event.target.value });
  }

  changeBranchEmailHandler = (event) => {
    this.setState({ branchEmail: event.target.value });
  }

  changeBranchImageURLHandler = (event) => {
    this.setState({ branchImageURL: event.target.value });
  }

  changeBranchManagerNameHandler = (event) => {
    this.setState({ branchManagerName: event.target.value });
  }

  changeBranchPhoneHandler = (event) => {
    this.setState({ branchPhone: event.target.value });
  }


  render() {
    return (
      <div>
        <h1> Add New Branch </h1>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label> Branch Address: </label>
              <input placeholder='Branch Address' name='branchAddress' className='form-control' value={this.state.branchAddress} onChange={this.changeBranchAddressHandler}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Name: </label>
              <input placeholder='Branch Name' name='branchName' className='form-control' value={this.state.branchName} onChange={this.changeBranchNameHandler}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Card Number: </label>
              <input placeholder='Branch Card Number' name='branchCardNumber' className='form-control' value={this.state.branchCardNumber} onChange={this.changeBranchCardNumberHandler}>
              </input>
            </div>
            <label> Branch Email: </label>
            <input placeholder='Branch Email' name='branchEmail' className='form-control' value={this.state.branchEmail} onChange={this.changeBranchEmailHandler}>
            </input>

            <div className='form-group'>
              <label> Branch Image URL: </label>
              <input placeholder='Branch Image URL' name='branchImageURL' className='form-control' value={this.state.branchImageURL} onChange={this.changeBranchImageURLHandler}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Manager Name: </label>
              <input placeholder='Branch Manager Name' name='branchManagerName' className='form-control' value={this.state.branchManagerName} onChange={this.changeBranchManagerNameHandler}>
              </input>
            </div>

            <div className='form-group'>
              <label> Branch Phone: </label>
              <input placeholder='Branch Phone' name='branchPhone' className='form-control' value={this.state.branchPhone} onChange={this.changeBranchPhoneHandler}>
              </input>
            </div>

            <button className='btn btn-info' onClick={this.saveBranch}> Save </button>
            <button className='btn btn-secondary' onClick={this.cancel.bind(this)}> Cancle </button>

          </form>
        </div>
      </div>
    )
  }
}

export default withParams(EmpUpdate);




