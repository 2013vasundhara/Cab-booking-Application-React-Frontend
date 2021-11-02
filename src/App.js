import ListCustomerComponent from './components/ListCustomerComponent';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import Home from './components/Home';
import ViewCustomerComponent from './components/ViewCustomerComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
                <div className="container">
                <Switch>
                <Route path = "/" exact component = {Home}></Route>
                      {/* <Route path = "/" exact component = {ListCustomerComponent}></Route> */}
                       <Route path = "/customers" component = {ListCustomerComponent}></Route>
                       <Route path = "/add-customer/:customerId" component = {CreateCustomerComponent}></Route>
                       <Route path = "/view-customer/:customerId" component = {ViewCustomerComponent}></Route>
                       {/* <Route path = "/update-customer/:customerId" component = {UpdateCustomerComponent}></Route> */}
                </Switch>
              </div>
              <FooterComponent/>
     
    </Router>
    </div>
  );
}

export default App;
