import React, { Component } from 'react';

class ZipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ""
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.submitZipCode = this.submitZipCode.bind(this);
  }

  render() {
    return (
      <div className="zip-form">
        <form id="zipForm" onSubmit={this.submitZipCode}>
          <div className="flex-parent">
            <label htmlFor="zipcode">Zip</label>
            <input className="form-control" type="text" id="zipcode" name="zipcode" onChange={this.inputChanged} required value={this.state.zipcode} />
            <button type="submit" className="btn btn-success"> Get the forecast!</button>
          </div>
        </form>
      </div>
    );
  }

  submitZipCode (e) {
    e.preventDefault(); // don’t submit the form
    const { zipcode } = this.state; // get the zipcode from the state
    const { onSubmit } = this.props; // the method from the App 
    onSubmit(zipcode); // the form calls a method on the App and passes the zipcode
    this.setState( {zipcode : ""} ); // clear the zipcode in the class (and on the web page)
}

  inputChanged(e) {
    const { value } = e.target;
    this.setState({ zipcode: value });
  }

  
}

export default ZipForm;
