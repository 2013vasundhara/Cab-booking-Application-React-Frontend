import axios from 'axios';
const CUSTOMER_API_BASE_URL = "http://localhost:9095//api/v1/customers";


class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }
    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }
    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + customerId);
    }
    updateCustomer(customer, customerId){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customerId,customer);
    }
    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId);
    }

}
export default new CustomerService()