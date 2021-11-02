import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            customerId: this.props.match.params.customerId,
            username: '',
            mobileNumber: '',
            email: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }
    componentDidMount(){
        if(this.state.customerId === '_add'){
            return
        }else{

        CustomerService.getCustomerById(this.state.customerId).then( (res) =>{
            let customer = res.data;
            this.setState({username: customer.username,
                mobileNumber: customer.mobileNumber,
                email : customer.email
            });
        });
    }
}

    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {username: this.state.username, mobileNumber: this.state.mobileNumber, email: this.state.email};
        console.log('customer => ' + JSON.stringify(customer));

        if(this.state.customerId === '_add'){
        CustomerService.createCustomer(customer).then(_res =>{
            this.props.history.push('/customers');
        });
    }else{
        CustomerService.updateCustomer(customer, this.state.customerId).then( _res => {
            this.props.history.push('/customers');
            });
    }
    }

    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changeMobileNumberHandler= (event) => {
        this.setState({mobileNumber: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/customers');
    }

    getTitle(){
        if(this.state.customerId === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> User Name: </label>
                                        <input placeholder="User Name" name="username" className="form-control" 
                                            value={this.state.username} onChange={this.changeUserNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> MobileNumber: </label>
                                        <input placeholder="MobileNumber" name="mobileNumber" className="form-control" 
                                            value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="email" className="form-control" 
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        );
    }
}

export default CreateCustomerComponent;