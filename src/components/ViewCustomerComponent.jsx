import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: this.props.match.params.customerId,
            customer: []
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer User Name: </label>
                            <div> { this.state.customer.username }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Mobile: </label>
                            <div> { this.state.customer.mobileNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Email ID: </label>
                            <div> { this.state.customer.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent