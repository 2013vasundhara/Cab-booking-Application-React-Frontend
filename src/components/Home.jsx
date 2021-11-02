import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
               
        }
    }
    Customer(){
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div className="addIcon">
                 <br></br>
                <h1 className="text-center bold">Cab Booking Application</h1>
                <br></br>
                <div className = "row ">
                 <table className = " table-striped table-bordered table1" align="center">

                            <thead>
                                <tr>
                                    <th> <h4 className="text-center">Customer Information</h4></th>
                                    <th><h4 className="text-center"> Driver Information</h4></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               
                                        <tr>
                                             <td><button onClick={ () => this.Customer()} className=" hbutton ">Customer </button>  </td>   
                                             <td><button style={{marginLeft: "10px"}} onClick={ () => this.Driver()} className=" hbutton" >Driver </button>  </td> 
                                             
                                        </tr>
                                    
                                
                            </tbody>
                        </table>
                 </div>
            
            </div>
        );
    }
}

export default Home;